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

export async function getThumbnails(thumbnailUrls: string[]): Promise<string[]> {
  const expiresIn = 60 * 5; // expires in 5 mins
  try {
    const { data, error } = await db.storage.from(process.env.NEXT_PUBLIC_SUPABASE_PUBLIC_ASSETS_BUCKET as string).createSignedUrls(thumbnailUrls.map((url)=>`thumbnails/${url}`), expiresIn);
    if (error) throw error;
    return data.map((item)=>item.signedUrl);
  } catch(error) {
    console.log(`Error: /lib/supabase/service - getProjects`, error);
    return [];
  }
}

export async function getTechStacksIcons(techstacks: string[]): Promise<techStackIconUrls> {
  const expiresIn = 60 * 5; // expires in 5 mins
  try {
    const { data, error } = await db.storage.from(process.env.NEXT_PUBLIC_SUPABASE_PUBLIC_ASSETS_BUCKET as string).createSignedUrls(techstacks.map((tech)=>`techicons/${tech}.svg`), expiresIn);
    if (error) throw error;
    return techstacks.reduce((acc, tech, index) => {
      acc[tech] = data[index].signedUrl;
      return acc;
    }, {} as techStackIconUrls);
  } catch(error) {
    console.log(`Error: /lib/supabase/service - getTechStacksIcons`, error);
    return {};
  }
}