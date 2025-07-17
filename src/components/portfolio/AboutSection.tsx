import { Card } from '@/components/ui/card';

const AboutSection = () => {
    return (
        <section id="about" className="py-20 px-6">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                        About Me
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Profile Image */}
                    <div className="relative">
                        <div className="aspect-square max-w-md mx-auto relative">
                            <div className="absolute inset-0 bg-hero-gradient rounded-3xl blur-xl opacity-30"></div>
                            <Card className="relative p-8 bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl overflow-hidden">
                                <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                                    <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                                        <img
                                            src="/Rahul.jpg"
                                            alt="RAHUL KUMAR"
                                            className="w-78 h-78 sm:w-56 sm:h-56 rounded-full object-cover border-4 border-primary shadow-xl transition-transform duration-300 hover:scale-105"
                                        />
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>

                    {/* About Content */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-2xl font-semibold mb-4 text-foreground">
                                🚀 Aspiring FullStack developer
                            </h3>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    I'm RAHUL kUMAR, a  FullStack Developer passionate about backend development,
                                    Frontend , and Backend
                                </p>
                                <p>
                                    I thrive in hackathons, solving problems collaboratively using React, ExpressJs, and Backend.
                                    I'm always eager to learn, whether it's building on Frontend or exploring backend tech.
                                </p>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-6 pt-6">
                            <Card className="p-6 bg-card/30 backdrop-blur-sm border border-border/30 text-center">
                                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                                <div className="text-sm text-muted-foreground">Projects & Hackathon Solutions</div>
                            </Card>
                            <Card className="p-6 bg-card/30 backdrop-blur-sm border border-border/30 text-center">
                                <div className="text-3xl font-bold text-secondary mb-2">2023</div>
                                <div className="text-sm text-muted-foreground">Internship Completed</div>
                            </Card>
                        </div>

                        {/* Quick Facts */}
                        <div className="space-y-3 pt-6">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                <span className="text-muted-foreground">📍 Based in Rajkot, Gujarat, India</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                                <span className="text-muted-foreground">🎓 B.Tech in Computer Engineering (Marwadi University)</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-accent rounded-full"></div>
                                <span className="text-muted-foreground">🧠 Learning FullStack Development</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;