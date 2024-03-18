import styled from "styled-components";

const Logo = () => {
    return ( 
        <div>
            <Link href={`/`}>LOGO</Link>
        </div>
     );
}

const Link = styled.a`
    color: white;
    font-size: 1.5rem;
`;

export default Logo;