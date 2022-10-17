import path from 'path'
import { readdir, readFile } from 'fs/promises'

import { ProjectInterface, ProjectThumbnailInterface } from '../types/Project'

function mapProjectThumbnails (projects: Array<ProjectThumbnailInterface>) : Array<ProjectThumbnailInterface> {
  return projects.map((proj : ProjectThumbnailInterface) : ProjectThumbnailInterface => ({
    featured: proj.featured,
    path: proj.path,
    thumbnail: proj.thumbnail,
    title: proj.title,
  }))
}

export async function getAllProjects () : Promise<Array<ProjectInterface>> {
  const projectsDataFolder = path.join(process.cwd(), 'data/projects/')
  const projectsFiles = await readdir(projectsDataFolder)

  const projectsPromises : Array<Promise<string>> = []
  projectsFiles.forEach((projectFileName) => {
    const projectFilePath = path.join(projectsDataFolder, projectFileName)
    projectsPromises.push(readFile(projectFilePath, { encoding: 'utf-8' }))
  })

  const projectsAsStrings = await Promise.all(projectsPromises)

  return projectsAsStrings.map((project: string) => JSON.parse(project))
}

export async function getAllProjectPaths () : Promise<Array<string>> {
  const projectsDataFolder = path.join(process.cwd(), 'data/projects/')
  const projectsFiles = await readdir(projectsDataFolder)

  return projectsFiles.map((path: string) => path.slice(0, -5))
}

export async function getAllProjectThumbnails () : Promise<Array<ProjectThumbnailInterface>> {
  const projects = await getAllProjects()
  return mapProjectThumbnails(projects)
}

export async function getProject (projectPath: string) : Promise<ProjectInterface> {
  const projectsDataFolder = path.join(process.cwd(), 'data/projects/')
  const fullProjectPath = path.join(projectsDataFolder, `${projectPath}.json`)

  const projectAsString = await readFile(fullProjectPath, { encoding: 'utf-8' })

  return JSON.parse(projectAsString)
}
