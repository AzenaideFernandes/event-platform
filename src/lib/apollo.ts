import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri:  import.meta.env.VITE_API_URL, 
  headers: {
    'Authorization': `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`,    
  },
  cache: new InMemoryCache(),
});

/* "https://api-sa-east-1.graphcms.com/v2/cl4ooajdf0obe01xl5umcbb4t/master" ,*/
/* `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`, */
/* 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTYwOTc4ODMsImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuZ3JhcGhjbXMuY29tL3YyL2NsNG9vYWpkZjBvYmUwMXhsNXVtY2JiNHQvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiMTU0Mjk3MTUtYjI1NS00MzUxLWFjMWEtN2Q5NTVmOWE2MGJkIiwianRpIjoiY2w0c3R4NHR0Mm94eDAxejZiajB5aHhodSJ9.JdAOgVvUKaBxo5dFoeweLIn5zafO9bGunDtkeWdVqS_b2Wjy38LX_z8PIatcxVWMr-tXMoJWT60NmE3zHpkntbTvC0hTc_Y-YcKGnOiYsYczqFkmU28IayU8Bj0W7kgQtobVnr5yGLYs_uivbN1OoPKjBvYtAaQ22r1Jvq8dB34R1wbOFEK6-qDRHNopYDsgD_CkdVQsMpArSXrUprM_9utIL3cGvXEFGuDGvJiBIN6LJiZ2AWN6gtxlO7gi_L7KGo0P6SAcFgB8Zco1w8n7rBDxpeeyk2U3AIgrjtBW7367OADSn0492vlBjBN9ur-tnxUlHApHGRT6Bn6jxlGyc75LvHRBOEcKyLji7J6eikJJu7KSiSB5MSqfjSUwHnw5KHs4NnjtmAp7-cNyl6Av4x-eDOqi8YAKRjqnt8HZxD1ntGBfFeDv0MRv54MiWCSA6UhCEY5gItBruQyPKfioTplxmtzKM3fsnt3OHv2Z-l-ujvcQvjAflnTqkKrIhkq0Ob97bz2E0Cu6Tr0PCBhVZgjJv0c5y1hFz5Up9tHFQ3DHz-E4UzOkHQsekYwx0BzjMi4IHeVtD-XuA-v8ulIIEX_POx6ggpx6n4ZPBWouUJ4xdyEpcOJ-Cyg1mszz5p3aJafTsjTUuSexlZwkbHyBWm4-H2MNL6FKzykg7deOXL0' */