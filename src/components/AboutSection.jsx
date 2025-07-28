import {Briefcase, Code, User} from 'lucide-react';

export const AboutSection = () => {
    return(
        <section id="about" className="py-24 px-4 relative">
            {""}
            <div className="container mx-auto max-w-5xl" >
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Sobre <span className="text-primary">Mí</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"></div>
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">
                        Desarrollador Web Full Stack, estudiante de Ingenieria en Informatica y Ciencias Fisicas
                    </h3>

                    <p className="text-muted-foreground">
                        Soy un apasionado del desarrollo web, con experiencia en la creación de aplicaciones web modernas y eficientes. Actualmente, estoy cursando mis estudios en Ingeniería en Informática y Ciencias Físicas, lo que me permite combinar mi amor por la tecnología con un enfoque científico y analítico.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            {""}
                            Contactame
                        </a>
                        <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-color duration-300">
                        Descarga mi CV
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Desarrollo Web</h4>
                                <p className="text-muted-foreground">
                                    Desarrollo aplicaciones web modernas y eficientes utilizando tecnologías como React, Node.js y bases de datos SQL/NoSQL.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Estudiante</h4>
                                <p className="text-muted-foreground">
                                    Mi gran interes por la Fisica, las Matematicas y la Informatica hacen que mi interes por la programacion cientifica aumente cada vez mas.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Experiencia</h4>
                                <p className="text-muted-foreground">
                                    Tengo experiencia en desarrollo de proyectos Full-Stack personales, la cual deseo poder aplicar en un ambito laboral.
                                </p>
                            </div>
                        </div>
                </div>
                </div>
            </div>
        </section>
    )
};