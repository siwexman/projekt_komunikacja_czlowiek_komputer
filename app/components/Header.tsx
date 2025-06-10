export default function Header() {
    return (
        <header>
            <div className="max-w-[1440px] mx-auto py-4">
                <div className="flex w-full p-4 justify-between">
                    <div className="uppercase text-2xl w-full">
                        Projekt Komunikacja
                    </div>
                    <ul className="text-lg grid grid-cols-3 divide-x-2 text-center w-full">
                        <li>
                            <a href="#" className="px-2">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="px-2">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#" className="px-2">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
