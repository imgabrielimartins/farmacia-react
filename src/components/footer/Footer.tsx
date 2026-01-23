import { GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-azure text-black border-t border-black/10">
            <div className="container mx-auto flex flex-col items-center py-8 px-4 gap-6">
                
                {/* Branding e Copyright */}
                <div className="text-center">
                    <p className="text-2xl font-extrabold tracking-tight">
                        Farmacia <span className="text-ice-dark">Viva</span>
                    </p>
                    <p className="text-sm font-medium opacity-70">
                        &copy; {currentYear} Todos os direitos reservados.
                    </p>
                </div>

                {/* Divisor minimalista */}
                <div className="h-px w-16 bg-black/20" />

                {/* Redes Sociais */}
                <div className="flex flex-col items-center gap-3">
                    <p className="text-sm uppercase tracking-widest font-semibold opacity-60">
                        Conecte-se conosco
                    </p>
                    
                    <div className="flex gap-6">
                        <a 
                            href="https://www.linkedin.com/in/gabrielimartinsdev/" 
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Linkedin"
                            className="hover:text-ice hover:-translate-y-1 transition-all duration-300 ease-in-out"
                        > 
                            <LinkedinLogoIcon size={32} weight="fill" />
                        </a>

                        <a 
                            href="https://www.instagram.com/imgabrielimartins/" 
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="hover:text-ice hover:-translate-y-1 transition-all duration-300 ease-in-out"
                        > 
                            <InstagramLogoIcon size={32} weight="fill" />
                        </a>

                        <a 
                            href="https://github.com/imgabrielimartins" 
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Github"
                            className="hover:text-ice hover:-translate-y-1 transition-all duration-300 ease-in-out"
                        > 
                            <GithubLogoIcon size={32} weight="fill" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;