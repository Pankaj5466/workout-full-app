import { useEffect, useState } from "react";
import Card from "../components/Card";
import Select from '../components/UI/Select'
import backendServer from "../api/axios-setup";
import { URL_GET_ALL_EXERCISE } from "../api/url-constant";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TablePagination } from '@mui/material';

function createData(
    name,
    calories,
    fat,
    carbs,
    protein,
  ) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  

//https://mui.com/material-ui/react-table/
const MyTable = (props)=>{
    const {columns,rows} = props;

    const [page,setPage] = useState(0);
    const [rowsPerPage,setRowsPerPage] = useState(5);
    const handleChangePage = (event,newPage)=>{
        setPage(newPage);
    }
    const handleChangeRowsPerPage = event => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    }


    return (
        <>
        <TableContainer component={Paper} className="table-container">
        <Table sx={{ minWidth: 650 }} aria-label="simple table" className="table-container">
          <TableHead>
            <TableRow>
                {columns.map(c => (<TableCell >{c}</TableCell>))}          
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) //IMP: Note .slice is used for pagination
                .map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">{row.title + " " + row.id}</TableCell>
                <TableCell > <div className="image-container"> <img src = {row.img.split(',').at(0)}></img> </div></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
              <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
    </>
    )
}

// const targetMuscleOptions = [
//     {value:"Chest",label:'Chest'},
//     {value:'hand',label:'habnd'},
//     {value:'leg',label:'leg'}
// ]

const columns = ["About","img","Detail","Add"];

const AddExercise = () =>{

    const [searchOptions,setSearchOptions] = useState({
        targetMuscleOptions:[],
        targetEquipmentOptions:[]
    })

    //TO-DO: do we need useSearchParmas to change the url?
    const [filterOption,setFilterOption] = useState({
        'target-muscle':'',
        equipment:''
    })

    const [exerciseList,setExerciseList] = useState([]);
    const [selectedExercise,setSelectedExercise] = useState([]);

    useEffect(()=>{
        
        backendServer.get(URL_GET_ALL_EXERCISE)
            .then(resposne => resposne.data)
            .then(data => setExerciseList(data))
            .catch(e=> console.log('Unable to get all exercise list: ',e))
    },[]);

    console.log(exerciseList.slice(0,10));

    
    //TO-DO: the computation in this useEffect is too expensive & its for static value too.
    //please ask precomuted value from backend or fix it in frontend
    useEffect(()=>{

        // const value = exerciseList.map(e => e.target_muscle)
        //                 .filter((v,i,a) => a.indexOf(v) === i);
        // console.log('UNIQUE value: ',value);

        
        //get all filter value, either from backend OR calculate at frontend
        const uniqueTargetMuscles = exerciseList.reduce((acc, current) => {
                  const targetMuscles = current.primary_muscle_group.split(';');
            targetMuscles.forEach(targetMuscle => {
                const [muscle, weight] = targetMuscle.split(',');
                if (!acc.includes(muscle)) {
                    acc.push(muscle);
                }
            });
            return acc;
        }, []); //IMP: uniqueTargetMuscles is set to empty on first start

        const uniqueEqupment = exerciseList.reduce((acc,current)=>{
            const equipments = current.equipment.split(';');

            equipments.forEach(eq =>{
                if(!acc.includes(eq)) {
                    acc.push(eq);
                }
            })
            return acc;
        },[])

        console.log('uniqueTargetMuscles: ',uniqueTargetMuscles);
        console.log('uniqueEqupment: ',uniqueEqupment);

        setSearchOptions({
            targetMuscleOptions:uniqueTargetMuscles.map(e => ({value:e,label:e})),
            targetEquipmentOptions:uniqueEqupment.map(e => ({value:e,label:e}))
        })
        

    },[JSON.stringify(exerciseList)])

    const getFilteredExerciseList = () =>{
        // console.log("filterOption: ",filterOption);
        // if(filterOption.equipment === '' && filterOption["target-muscle"] === '')
        //     return exerciseList;

        return exerciseList.filter((e,index)=>{
            
            if(e.primary_muscle_group.split(';').includes(filterOption["target-muscle"])
                && e.equipment.split(';').includes(filterOption.equipment)
                ) 
                return true;
            return false;
        })
    }

    console.log('getFilteredExerciseList: ',getFilteredExerciseList())

    return <>
        

        <div className="search-filter">
            <label htmlFor= 'target-muscle'>
                Target Muscle:   
                <Select name='target-muscle' options = {searchOptions.targetMuscleOptions}
                    onChange={e => setFilterOption({...filterOption,
                        [e.target.name] : e.target.value
                    })}>

                </Select>
            </label>
            <label htmlFor= 'equipment'>
                Target Muscle:   
                <Select name='equipment' options = {searchOptions.targetEquipmentOptions}
                 onChange={e => setFilterOption({...filterOption,
                    [e.target.name] : e.target.value
                })}>

                </Select>
            </label>
        </div>

        {'Total Record:' + getFilteredExerciseList().length}
        <MyTable columns={columns} rows = {getFilteredExerciseList()}/>
    </>
}

export default AddExercise;