import {Button, Input} from 'antd'

const Header = () => {
    return ( 
        <header>
            <h1>Anonime</h1>
            <Button className='header-btn' type='link'>Home</Button>
            <Button className='header-btn' type='link'>List anime</Button>
            <Input className='header-input' placeholder='Search anime or movie'/>
        </header>
    );
}

export default Header;
