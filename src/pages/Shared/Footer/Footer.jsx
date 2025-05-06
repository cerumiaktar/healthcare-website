

const Footer = () => {
    return (
        <div className="bg-[#6A1C2940]">
            <footer className="footer sm:footer-horizontal container mx-auto text-base-content p-10">
                <aside>
                    <img src="https://i.ibb.co.com/hFNY2WJN/healthcare-logo-1.png" alt="" />
                    <p className="text-[#333333]">
                    Your trusted partner in ensuring <br /> comprehensive medical and <br /> travel assistance
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">About</h6>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">FAQ</a>
                    <a className="link link-hover">Career</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Useful Links</h6>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Terms & Condition</a>
                    <a className="link link-hover">Support</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Follow Us</h6>
                    <a className="link link-hover">Facebook</a>
                    <a className="link link-hover">Instagram</a>
                    <a className="link link-hover">Youtube</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;