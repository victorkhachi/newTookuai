import {ResponsiveContainer,BarChart,Bar,YAxis,XAxis, Tooltip} from 'recharts'

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
    <ResponsiveContainer  width='100%' maxHeight='50%' aspect={1.5}>
        <BarChart data={data} >
                <Tooltip />
                 <XAxis dataKey='date'/>
                 <YAxis dataKey='data'/>
                 <Bar dataKey='data' fill='gray' />
        </BarChart>
    </ResponsiveContainer>
    )

}