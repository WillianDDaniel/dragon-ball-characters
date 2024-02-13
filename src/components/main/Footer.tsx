export default function Footer() {
    return (
        <footer className={`
            text-right text-sm 
            bg-gradient-to-t from-zinc-950 to-zinc-900
            sm-2:h-auto sm-2:text-center sm-2:p-3
            `}>

            {/* Footer to large screens (LG) */}
            <div className={`
                hidden h-[8vh] items-center justify-center lg:flex
            `}>
                Todos os direitos reservados © 2024 | Desenvolvido com ❤️ por Willian D. Daniel
            </div>

            {/* Footer to another any screens */}
            <div className={`
                 flex flex-col items-center justify-center h-[9vh] lg:hidden sm-2:h-auto
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