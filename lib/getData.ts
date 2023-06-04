import path from 'path'
import { readdir, readFile } from 'fs/promises'

import { log } from 'next-axiom'

import { Project, ProjectThumbnail } from '../types/Project'

function mapProjectThumbnails(projects: Project[]): ProjectThumbnail[] {
  return projects.map(
    (proj: Project): ProjectThumbnail => ({
      featured: proj.featured,
      path: proj.path,
      thumbnail: proj.thumbnail,
      title: proj.title,
    })
  )
}

export async function getAllProjects(): Promise<Project[]> {
  log.debug('call to getAllProjects')

  const projectsDataFolder = path.join(process.cwd(), 'data/projects/')
  const projectsFiles = await readdir(projectsDataFolder)

  const projectsPromises: Promise<string>[] = []

  projectsFiles.forEach((projectFileName) => {
    const projectFilePath = path.join(projectsDataFolder, projectFileName)
    projectsPromises.push(readFile(projectFilePath, { encoding: 'utf-8' }))
  })

  const projectsAsStrings = await Promise.all(projectsPromises)

  const projects = projectsAsStrings.map((project: string) =>
    JSON.parse(project)
  )

  return projects.sort(
    (a, b) => b.date.year - a.date.year || b.date.month - a.date.month
  )
}

export async function getAllProjectPaths(): Promise<string[]> {
  log.debug('call to getAllProjectPaths')

  const projectsDataFolder = path.join(process.cwd(), 'data/projects/')
  const projectsFiles = await readdir(projectsDataFolder)

  return projectsFiles.map((path: string) => path.slice(0, -5))
}

export async function getAllProjectThumbnails(): Promise<ProjectThumbnail[]> {
  log.debug('call to getAllProjectThumbnails')

  const projects = await getAllProjects()

  return mapProjectThumbnails(projects)
}

export async function getFeaturedProjectThumbnails(): Promise<
  ProjectThumbnail[]
> {
  log.debug('call to getFeaturedProjectThumbnails')

  const allProjectThumbnails = await getAllProjectThumbnails()

  return allProjectThumbnails.filter(
    (projectThumbnail) => projectThumbnail.featured
  )
}

export async function getProject(projectPath: string): Promise<Project> {
  log.debug(`call to getProject for '${projectPath}'`)

  const projectsDataFolder = path.join(process.cwd(), 'data/projects/')
  const fullProjectPath = path.join(projectsDataFolder, `${projectPath}.json`)

  const projectAsString = await readFile(fullProjectPath, { encoding: 'utf-8' })

  return JSON.parse(projectAsString)
}
