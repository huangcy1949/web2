import React,{Component} from 'react';
import {Table,Divider,Row, Col,Select,Input,Button,Form,Tag,Switch, Icon} from 'antd';
import PageContent from '../../layouts/page-content';

export const PAGE_ROUTE = '/user-center';

const FormItem = Form.Item;
const Option = Select.Option;

export default class UserCenterList  extends Component {
    state ={
        columns :[],
        data :[],
    };

    render () {
        const columns = [{
            title: '规则ID',
            dataIndex: 'name',
            key: 'name',
            render: text => <a href="javascript:;">{text}</a>,
        }, {
            title: '产品线',
            dataIndex: 'age',
            key: 'age',
        }, {
            title: '规则名称',
            dataIndex: 'address',
            key: 'address',
        }, {
            title: '执行类型',
            dataIndex: 'address',
            key: 'address',
            },{
            title: '规则描述',
            dataIndex: 'address',
            key: 'address',
        },{
            title: '控制点',
            dataIndex: 'address',
            key: 'address',
        },{
            title: '风险类型',
            dataIndex: 'address',
            key: 'address',
        },{
            title: '处罚方式',
            dataIndex: 'address',
            key: 'address',
        },{
            title: '创建人',
            dataIndex: 'address',
            key: 'address',
        },{
            title: '操作类型',
            dataIndex: 'address',
            key: 'address',
        },{
            title: '是否开启处罚',
            dataIndex: 'address',
            key: 'address',
        },{
            title: '创建时间',
            dataIndex: 'address',
            key: 'address',
        },{
            title: '状态',
            dataIndex: 'address',
            key: 'address',
        },{
            title: '备注',
            dataIndex: 'address',
            key: 'address',
        },
            {
            title: '操作',
            key: 'action',
            render: (text, record) => (
                <span>
                  <a href="javascript:;">详情</a>
                  <Divider type="vertical" />
                    <a href="javascript:;">修改</a>
                    <Divider type="vertical" />
                    <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked />
                    <Divider type="vertical" />
                  <a href="javascript:;">元素流程图</a>
                </span>
            ),
        }];

        const data = [{
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        }, {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        }, {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        }];
        return(
            <PageContent>
                <div>
                    <Row>
                        <Col span={2} align="right">产品线：</Col>
                        <Col span={4}>
                            <Select
                                showSearch
                                style={{ width: 150 }}
                                placeholder="全部"
                                optionFilterProp="children"
                                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                >
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="tom">Tom</Option>
                            </Select>
                        </Col>
                        <Col span={2} align="right">控制点：</Col>
                        <Col span={3}>
                            <Select
                                showSearch
                                style={{ width: 140 }}
                                placeholder="全部"
                                optionFilterProp="children"
                                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                >
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="tom">Tom</Option>
                            </Select>
                        </Col>
                        <Col span={3} align="right">风险类型：</Col>
                        <Col span={4}>
                            <Select
                                showSearch
                                style={{ width: 150 }}
                                placeholder="全部"
                                optionFilterProp="children"
                                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                >
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="tom">Tom</Option>
                            </Select>
                        </Col>
                        <Col span={2} align="right">状态：</Col>
                        <Col span={4}>
                            <Select
                                showSearch
                                style={{ width: 150 }}
                                placeholder="全部"
                                optionFilterProp="children"
                                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                >
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="tom">Tom</Option>
                            </Select>
                        </Col>
                    </Row>
                </div>
                <div style={{ marginTop: 16 }}>
                    <Row>
                        <Col span={2} align="right">规则ID：</Col>
                        <Col span={4}>
                            <Input placeholder="Basic usage" style={{ width: 150 }}/>
                        </Col>
                        <Col span={2} align="right">规则名称：</Col>
                        <Col span={3}>
                            <Input placeholder="Basic usage" style={{ width: 140 }} />
                        </Col>
                        <Col span={3} align="right">是否开启处罚：</Col>
                        <Col span={4}>
                            <Select
                                showSearch
                                style={{ width: 150 }}
                                placeholder="全部"
                                optionFilterProp="children"
                                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                >
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="tom">Tom</Option>
                            </Select>
                        </Col>
                        <Col span={2} align="right">操作类型：</Col>
                        <Col span={4}>
                            <Select
                                showSearch
                                style={{ width: 150 }}
                                placeholder="全部"
                                optionFilterProp="children"
                                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                >
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="tom">Tom</Option>
                            </Select>
                        </Col>
                    </Row>
                </div>
                <div align="right" style = {{ marginTop: 14,marginRight:12 }}>
                    <Button type="primary" >查询</Button>
                </div>
                <div style = {{ marginTop: 10 }}>
                    <Button>添加</Button>
                </div>
                <Table
                    columns={ columns}
                    dataSource={data}
                    rowKey="id"
                    pagination={15}
                    />

            </PageContent>
        );
    }
}
