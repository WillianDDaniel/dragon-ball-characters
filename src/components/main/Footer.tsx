export default function Footer() {
    return (
        <footer className="text-center">
            {/* Footer para tela grande (LG) */}
            <div className="hidden h-[7.5vh] bg-zinc-950 lg:flex items-center justify-center">
                Todos os direitos reservados © 2024 | Desenvolvido com ❤️ por Willian D. Daniel
            </div>

            {/* Footer para outras telas */}
            <div className="lg:hidden h-[9vh] bg-zinc-950 flex flex-col items-center justify-center">
                <p>
                    Todos os direitos reservados © 2024 
                </p>
                <p>
                    Desenvolvido com ❤️ por Willian D. Daniel
                </p>
            </div>
        </footer>
    );
}