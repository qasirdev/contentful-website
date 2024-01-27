import Image from "next/image";

async function getCards() {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=card`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const cards = await getCards();
  return (
    <div className="bg-gray-700 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 p-5 gap-5">
      {cards.items.map((card: any) => (
        <div className=" bg-white p-5" key={card.sys.id}>
          <div>
            {cards.includes.Asset.map((a: any, index:number) => (
              <div key={index}>
                <div>
                  {card.fields.image.sys.id == a.sys.id ? (
                    <Image
                      src={"https:" + a.fields.file.url}
                      alt=""
                      width={400}
                      height={400}
                      className="h-64"
                    />
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <h1 className=" text-3xl font-semibold p-2">{card.fields.title}</h1>
          <p className='text-md'>{card.fields.desc.content[0]?.content[0]?.value}</p>
          <p className='text-md'>{card.fields.desc.content[0]?.content[1]?.value}</p>
          <h2 className=" font-bold">£: {card.fields.price}</h2>
        </div>
      ))}
    </div>
  );
}
