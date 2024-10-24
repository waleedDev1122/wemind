import Image from "next/image";


export default function Header() {
    return (
        <section className="header">
            <header>
                <nav className="navbar navbar-expand-lg">
                    <div className="container p-0">
                        <a className="navbar-brand">

                            <Image src="images/wemind-logo.svg" width={154} height={48} alt="Wemind Logo"
                                className="d-inline-block align-text-top logo-img" />
                        </a>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <Image src="/images/menu.svg" alt="Menu" width={24} height={24} />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">How it works?</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Benefits</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Blogs</a>
                                </li>
                                <li className="nav-item">
                                    <button
                                        className="primary-btn mobile my-3">Request a Demo <Image src="/images/arrow-right.svg" width={14} height={10} alt="Request Demo" /></button>
                                </li>
                            </ul>
                        </div>
                        <button
                            className="primary-btn header-btn">Request a Demo <Image src="/images/arrow-right.svg" width={14} height={10} alt="Request Demo" /></button>
                    </div>
                </nav>
            </header>
        </section>

    );
}