import { NextResponse, NextRequest } from 'next/server';
import { projects } from '@/app/lib/projects-db';
import { Project } from '@/app/lib/projects-db';

// GET /api/projects/2
export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const resolvedParams = await params;
const id = Number(resolvedParams.id);

  if (Number.isNaN(id)) {
    return NextResponse.json({ error: 'Invalid id' }, { status: 400 });
  }

  // search in the db for projects with the matching type
  // define an empty array of projects
  let result: Project[] = [];
  
  projects.forEach(project => {
    // for each project in the database of projects...
    // if it matches the expected id
    if (project.id == id){
      // add it to the array of found projects (result)
      result.push(project)
    }
    // else, do nothing (ignore it)
  });

  // return NextResponse.json({ error: 'Not found' }, { status: 404 }) if missing

  // return result as a JSON
  return NextResponse.json({ result });
}