import { Link } from 'react-router-dom';

export default function Navik() {
    return (
        <nav style={styles.navbar}>
            <div style={styles.container}>
                <div style={styles.brand}>
                    <Link to="/" style={styles.link}>Azizbek Gulomov</Link>
                </div>
                <div style={styles.navLinks}>
                    <Link to="/projects" style={styles.link}>Projects</Link>
                    {/* <Link to="/contacts" style={styles.link}>Contacts</Link>
                    <Link to="/language" style={styles.link}>Language</Link> */}
                </div>
            </div>
        </nav>
    );
}

const styles = {
    navbar: {
        backgroundColor: "rgba(45,45,45,0.5)", // Dark background
        padding: '10px 20px',
        position: 'fixed',
        zIndex:1000,
        top: 0,
        width: '100%',
        backdropFilter: 'blur(10px)',
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    brand: {
        fontSize: '1.5em',
        fontWeight: 'bold',
        // fontFamily: "'Consolas', 'Courier New', monospace",
        fontFamily:"Deter",

    },
    navLinks: {

        display: 'flex',
        gap: '15px',
        fontFamily:"Deter",

    },
    link: {
        color: '#ffffff', // White text
        textDecoration: 'none',
        fontFamily:"Deter",

    }
};