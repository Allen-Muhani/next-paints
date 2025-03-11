import ContactUsCard from '@/components/ContactUs';
import BulletList from '../components/bullet_lists';
import NumberedList from '../components/numbered_lists';
import StyledTable from '../components/styled_table';
import { product_data } from '../product_data/product.data';
import Footer from '@/components/Footer';

async function ProductPage({ params }: { params: { id: string } }) {

    // The await is necessary as it throws an error;
    const { id } = await params
    const product = product_data.find(item => item.uri.valueOf() === id)


    return (
        <>
            <section className="container mx-auto p-6 max-w-6xl pt-35 flex items-center justify-center  flex-col">
                <h1 className="text-5xl font-bold mb-4 text-red-700 text-center">{product?.name}</h1>
                <p className="text-gray-700 mb-4 text-center">
                    {product?.briefDescription}
                </p>
                <div className="flex flex-col md:flex-row items-center gap-6">
                    {/* Image */}
                    <div className="w-full md:w-1/3 lg:w-1/4 flex self-start pt-20">
                        <img
                            src="https://via.placeholder.com/400"
                            alt="Placeholder"
                            className="w-full rounded-lg shadow-lg "
                        />
                    </div>

                    {/* Text Content */}
                    <div className="w-full md:w-2/3 lg:w-3/4 md:pl-6, lg:pl-12 pt-18">


                        <p className="text-gray-700 mb-4">
                            {product?.description} </p>

                        {product?.sections.map((section) => (
                            <>
                                <h2 className="text-xl font-semibold mt-4 mb-2">{section.title}</h2>

                                {section.description !== "" && section.type === "paragpraph" && (
                                    <p className="text-gray-700 mb-4">{section?.description} </p>
                                )}

                                {section.iterations.length > 0 && section.type === "bullets" && (
                                    <BulletList items={section.iterations}></BulletList>
                                )}

                                {section.iterations.length > 0 && section.type === "numbered" && (
                                    <NumberedList items={section.iterations}></NumberedList>
                                )}

                                {section.table.length > 0 && (
                                    <StyledTable data={section.table}></StyledTable>
                                )}

                                {section.footer !== "" && (
                                    <p className="text-gray-700 mb-4">{section?.footer} </p>
                                )}

                            </>
                        ))}
                    </div>
                </div>

                <ContactUsCard></ContactUsCard>
            </section>
            <Footer></Footer>
        </>
    );
}

export default ProductPage;