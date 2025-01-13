import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '@/firebase/config';
import { CardProps } from '@/components/display/Card';

export async function getProjects(isFeatured: boolean): Promise<CardProps[]> {
  try {
    const projectsRef = (isFeatured) ? query(collection(db, 'Project'), where('featured', '==', true)) : collection(db, 'Project');
    const querySnapshot = await getDocs(projectsRef);
    const projects = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      title: doc.data().title,
      description: doc.data().description,
      imageUrl: doc.data()['image_url'],
      techStacks: doc.data()['tech_stacks'],
      projectUrl: doc.data()['project_url'],
      featured: doc.data()['featured'],
    } as CardProps));
    return projects;
  } catch (e) {
    console.log(`Error: /lib/firebase/service - getProjects`, e);
    return [];
  }
};