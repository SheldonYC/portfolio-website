import { db } from '@/supabase/config';
import { CardProps, techStackIconUrls } from '@/types/types';

export async function getProjects(isFeatured: boolean): Promise<CardProps[]> {
  try {
    const selectedCols = `id, title, description, thumbnail_url, tech_stacks, project_url, is_featured`;
    const { data, error } = (isFeatured) ?
    await db.from('project').select(selectedCols).eq('is_featured', true) :
    await db.from('project').select(selectedCols);
    if (error) throw error;
    return data.map((item)=> {return {
      id: `${item.id}`,
      title: item.title || '',
      description: item.description || '',
      imageUrl: item.thumbnail_url || '',
      techStacks: item.tech_stacks || [],
      projectUrl: item.project_url || '',
      featured: item.is_featured,
    }})
  } catch (error) {
    console.log(`Error: /lib/supabase/service - getProjects`, error);
    return [];
  }
};

export async function getThumbnails(thumbnailPaths: string[]): Promise<string[]> {
  try {
    return thumbnailPaths.map((path)=>`${process.env.NEXT_PUBLIC_SUPABASE_PROJECT_REF}.supabase.co/storage/v1/object/public/${process.env.NEXT_PUBLIC_SUPABASE_PUBLIC_ASSETS_BUCKET}/thumbnails/${path}`);
  } catch(error) {
    console.log(`Error: /lib/supabase/service - getProjects`, error);
    return [];
  }
}

export async function getTechStacksIcons(techstacks: string[]): Promise<techStackIconUrls> {
  try {
    const iconMap: techStackIconUrls = {}
    techstacks.forEach((tech)=>{
      iconMap[tech] = `${process.env.NEXT_PUBLIC_SUPABASE_PROJECT_REF}.supabase.co/storage/v1/object/public/${process.env.NEXT_PUBLIC_SUPABASE_PUBLIC_ASSETS_BUCKET}/techicons/${tech}.svg`});
    return iconMap;
  } catch(error) {
    console.log(`Error: /lib/supabase/service - getTechStacksIcons`, error);
    return {};
  }
}