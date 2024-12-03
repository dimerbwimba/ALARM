import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {

    const slug = req.nextUrl.searchParams.get('slug') as string;

    const blogs = [
        {
            title: "Reunion du conseille d'administration",
            slug: "reunion-du-conseille-dadministration",
            author: "Bwimba Mihandago Dimer",
            comments: 0,
            body: "",
        },
        {
            title: "Lancement du Site internet d'ALARM CONGO",
            slug: "lancement-du-site-internet-alarm-congo",
            author: "Bwimba Mihandago Dimer",
            comments: 0,
            body: "",
        }

    ]
    
    const blog = blogs.filter((blog)=> blog.slug == slug)

    return NextResponse.json([
        
            ...blog
        
    ])
}