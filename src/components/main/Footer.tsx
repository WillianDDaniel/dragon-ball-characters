export default function Footer() {
    return (
        <footer className={`
            text-right text-sm 
            bg-gradient-to-t from-zinc-950 to-zinc-900
            sm-2:h-auto sm-2:text-center sm-2:p-3
            `}>

            {/* Footer para tela grande (LG) */}
            <div className={`
                hidden h-[8vh] lg:flex items-center justify-center
            `}>
                Todos os direitos reservados © 2024 | Desenvolvido com ❤️ por Willian D. Daniel
            </div>

            {/* Footer para outras telas */}
            <div className={`
                lg:hidden h-[9vh] flex flex-col items-center justify-center sm-2:h-auto
            `}>
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