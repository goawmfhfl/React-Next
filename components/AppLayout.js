/* eslint-disable */

import propTypes from 'prop-types';
import Link from 'next/link';
import { Input, Menu, Row, Col} from 'antd';
const onSearch = value => console.log(value);

const AppLayout = ({ children }) => {
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/"><a>노드버드</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Input.Search
                        style = {{ verticalAlign: 'middle'}}
                          placeholder="input search text"
                          allowClear
                          enterButton="Search"
                          size="large"
                          onSearch={onSearch}>
                    </Input.Search>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup"><a>회원가입</a></Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    왼쪽메뉴
                </Col> 
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    <a href="https://blog.naver.com/goawmfhfl1" target="_blank" rel="noreferrer noopener">BLOG</a>
                </Col>
            </Row>
        </div>

    )
}

AppLayout.propTypes = {
    children: propTypes.node.isRequired,
};
export default AppLayout;