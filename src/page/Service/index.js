import React, {Component} from 'react';
import {DatePicker} from 'antd';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';
import {inject, observer} from 'mobx-react';
import './index.less';

const {RangePicker} = DatePicker;

function onChange(date, dateString) {
    console.log(date, dateString);
}

@inject('stores')
@observer
class Service extends Component {
    render() {
        const chartList = [];
        this.props.stores.serviceStore.listData.map((item, index) => {
            chartList.push(
                <li key={index}>
                    <span>{item.rank}</span>
                    <span>{item.team}</span>
                    <span>{item.number}</span>
                </li>
            )
        });
        return (
            <div className="service-page">
                <div className="top-title">
                    <span className='small-title'>用户列表</span>
                    <span className="strong-title">查询表格</span>
                </div>
                <div className="container">
                    <div className="middle-numbers">
                        <div className="total-number">
                            <span>用户总数</span>
                            <span>399</span>
                        </div>
                        <div className="total-number">
                            <span>昨日新增用户数</span>
                            <span>19</span>
                        </div>
                        <div className="total-number">
                            <span>上周新增用户数</span>
                            <span>120</span>
                        </div>
                    </div>
                    <div className="middle-numbers">
                        <div className="total-number">
                            <span>团队总数</span>
                            <span>124</span>
                        </div>
                        <div className="total-number">
                            <span>昨日新增团队数</span>
                            <span>6</span>
                        </div>
                        <div className="total-number">
                            <span>上周新增团队数</span>
                            <span>34</span>
                        </div>
                    </div>
                    <div className="middle-numbers">
                        <div className="total-number">
                            <span>处理事件总数</span>
                            <span>2199</span>
                        </div>
                        <div className="total-number">
                            <span>昨日处理事件数</span>
                            <span>342</span>
                        </div>
                        <div className="total-number">
                            <span>上周处理事件数</span>
                            <span>678</span>
                        </div>
                    </div>
                    <div className="events-content">
                        <div className="select-row">
                            <span>事件数</span>
                            <ul className="choose">
                                <li>今日</li>
                                <li>本周</li>
                                <li>本月</li>
                                <li>全年</li>
                                <li><RangePicker onChange={onChange}/></li>
                            </ul>
                        </div>
                        <div className="chart-row">
                            <div className="chart">
                                <span className="chart-title">事件数趋势</span>
                                <BarChart width={600} height={300}
                                          data={this.props.stores.serviceStore.eventsData.slice()} margin={{top: 15}}
                                          barCategoryGap={'20%'}>
                                    <CartesianGrid strokeDasharray="3 3"/>
                                    <XAxis dataKey="name"/>
                                    <YAxis/>
                                    <Tooltip/>
                                    <Bar dataKey="num" fill="#8884d8"/>
                                </BarChart>
                            </div>
                            <div className="chart-list">
                                <span className="chart-title">团队调用次数排名</span>
                                <ul>
                                    {chartList}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Service;
