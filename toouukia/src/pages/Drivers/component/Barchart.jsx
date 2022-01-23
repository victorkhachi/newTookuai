import {ResponsiveContainer,BarChart,Bar,YAxis,XAxis} from 'recharts'

export default function Barchart({data}){
    //  const data=[{
    //      name:'python',
    //      student:13,
    //      fees:10
    //  },{
    //     name:'java',
    //     student:12,
    //     fees:10
    // },{
    //     name:'javascript',
    //     student:13,
    //     fees:10
    // },{
    //     name:'pycharm',
    //     student:11,
    //     fees:10
    // }]
    return (
    <ResponsiveContainer  width='50%' aspect={1}>
        <BarChart data={data}>
                 <XAxis dataKey='date'/>
                 <YAxis dataKey='data'/>
                 <Bar dataKey='data' stroke='red'/>
        </BarChart>
    </ResponsiveContainer>
    )

}