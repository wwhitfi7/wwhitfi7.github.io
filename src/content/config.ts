import { z, reference, defineCollection } from "astro:content";

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        tags: z.array(z.string()),
        publishDate: z.date(),
        footnote: z.string().optional(),
        relatedPosts: z.array(reference('blogposts')).optional(),
    }),
});

const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        tags: z.array(z.string()),
        publishDate: z.date(),
    }),
});

export const collections = {
    'blogposts': blogCollection,
    'projectposts': projectsCollection,
};
