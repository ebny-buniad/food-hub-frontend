import Link from "next/link"

type Provider = {
    id: string
    userId: string
    image: string
    restaurentName: string
    description: string
    address: string
    isOpen: boolean
    createdAt: string
    updatedAt: string
}

export default function AllRestaurants({ providers }: { providers: Provider[] }) {
    return (
        <div className="min-h-screen bg-gray-50 p-6 container mx-auto">
            <img className="w-full rounded-2xl" src="https://static.vecteezy.com/system/resources/thumbnails/054/611/336/small/wide-angle-foodgraphy-for-restaurant-with-copy-space-photo.jpg" alt="" />
            <h1 className="text-3xl font-bold my-8">
                Flat 15% off entire menu
            </h1>

            <div className="grid md:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-6">
                {providers.map((provider) => (
                    <Link key={provider?.id} href={`/${provider?.id}`}>
                        <div
                            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
                        >
                            {/* Image */}
                            <div className="h-48 w-full overflow-hidden">
                                <img
                                    src={provider?.image}
                                    alt={provider?.restaurentName}
                                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <div className="flex justify-between items-center mb-2">
                                    <h2 className="text-xl font-semibold">
                                        {provider?.restaurentName}
                                    </h2>

                                    <span
                                        className={`text-sm px-3 py-1 rounded-full ${provider?.isOpen
                                            ? "bg-green-100 text-green-600"
                                            : "bg-red-100 text-red-600"
                                            }`}
                                    >
                                        {provider?.isOpen ? "Open" : "Closed"}
                                    </span>
                                </div>

                                <p className="text-gray-600 text-sm mb-3">
                                    {provider?.description}
                                </p>

                                <p className="text-gray-500 text-sm">
                                    {provider?.address}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
