import clientPromise from "@/lib/mongodb"

export async function POST(request) {
    const body = await request.json()
    const client = await clientPromise
    const db = client.db("biturl")
    const collection = db.collection("url")

    // check is the short url exists 
    const doc = await collection.findOne({shorturl: body.shorturl})
    if(doc){
        return Response.json({ success: false, error: true, message: 'URL already exists' })
    }

    const res = await collection.insertOne({
        url: body.url,
        Shorturl: body.shorturl,
    })

    return Response.json({ success: true, error: false, message: 'URl Generated Successfully' })
}
