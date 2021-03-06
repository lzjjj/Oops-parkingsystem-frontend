import React, { Component } from 'react';
import { Table, Select, Input, Row, Col } from 'antd'

const InputGroup = Input.Group;
const Option = Select.Option;
const Search = Input.Search;
class orderManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchType: "id"
        }
    }
    componentWillMount() {
        this.props.onGetAllOrders();
    }

    setSeachType = (e) => {
        this.setState({
            searchType: e
        })
    }

    render() {
        const columns = [
            // { title: 'Full Name', width: 100, dataIndex: 'name', key: 'name', fixed: 'left' },
            { title: 'id', dataIndex: 'id', key: 'id', fixed: 'left' },
            { title: '车牌号', dataIndex: 'carId', key: 'carId' },
            { title: '类型', dataIndex: 'type', key: 'type' },
            { title: '状态', dataIndex: 'status', key: 'status' },
            {
                title: '操作',
                key: 'operation',
                dataIndex: 'operation',
                fixed: 'right',
                width: 200,
                render: (e) => (
                    <span>
                        <a href="javascript:;">{e}</a>
                    </span>
                ),
            },
        ];

        const data = this.props.ordersList;
        // const Search = Input.Search;

        return (
            <div>
                <Row type="flex" justify="space-around" align="middle" style={{marginBottom:"2rem"}}>
                    <Col span={6}></Col>
                    <Col span={6}></Col>
                    <Col span={6} align="right">
                        <InputGroup compact>
                            <Select defaultValue="id" style={{ width: "100px" }} onChange={this.setSeachType}>
                                <Option value="id">id</Option>
                                <Option value="carId">车牌号</Option>
                                <Option value="type">类型</Option>
                                <option value="status">状态</option>
                            </Select>
                        </InputGroup>
                    </Col>
                    <Col span={6}>
                        <Search
                            placeholder="示例文字"
                            enterButton="搜索"
                            // onSearch={value => console.log(value)}
                            onSearch={value => this.props.onSearchOrders({
                                searchType: this.state.searchType,
                                searchValue: value
                            })}
                            style={{ width: 400 }}
                        />
                    </Col>
                </Row>
                <Table columns={columns} dataSource={data} scroll={{ x: 1300 }} />
            </div>
        );
    }
}

export default orderManagement;