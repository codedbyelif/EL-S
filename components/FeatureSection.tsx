import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const FeatureSection = () => {
    return (
        <section className="py-32 w-full">
            <div className="container flex flex-col gap-16 lg:px-16 mx-auto">
                <div className="lg:max-w-sm">
                    <h3 className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
                        ELİF KAYNAR
                    </h3>
                    <p className="mb-8 text-muted-foreground lg:text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.
                    </p>

                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
                    <div className="flex flex-col overflow-clip rounded-xl border border-white/10 md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8 bg-white/5">
                        <div className="md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem]">
                            <img
                                alt="Feature 1"
                                className="aspect-16/9 h-full w-full object-cover object-center"
                                src="https://shadcnblocks.com/images/block/placeholder-1.svg"
                            />
                        </div>
                        <div className="flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                            <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                                Feature 1
                            </h3>
                            <p className="text-muted-foreground lg:text-lg">
                                Nam vitae molestie arcu. Quisque eu libero orci. Aliquam imperdiet magna nec massa consectetur, id interdum ante congue.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col-reverse overflow-clip rounded-xl border border-white/10 md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8 bg-white/5">
                        <div className="flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                            <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                                Feature 2
                            </h3>
                            <p className="text-muted-foreground lg:text-lg">
                                Nam vitae molestie arcu. Quisque eu libero orci. Aliquam imperdiet magna nec massa consectetur, id interdum ante congue.
                            </p>
                        </div>
                        <div className="md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem]">
                            <img
                                alt="Feature 2"
                                className="aspect-16/9 h-full w-full object-cover object-center"
                                src="https://shadcnblocks.com/images/block/placeholder-2.svg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;
