import { NextResponse, NextRequest } from 'next/server';
import { projects } from '@/app/lib/projects-db';
import { Project } from '@/app/lib/projects-db';

// GET endpoint that gets all of the projects and allows for optional filtering with ?type=opensource or ?type=school. 
// GET /api/projects?category=opensource
// GET /api/projects?category=school
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');

  // search in the db for projects with the matching type
  // define an empty array of projects
  let result: Project[] = [];
  
  projects.forEach(project => {
    // for each project in the database of projects...
    // if it matches the expected type OR type is null...
    if (project.type == type || type == null){
      // add it to the array of found projects (result)
      result.push(project)
    }
    // else, do nothing (ignore it)
  });

  // return NextResponse.json({ error: 'Not found' }, { status: 404 }) if missing

  // return result as a JSON
  return NextResponse.json({ result });

}