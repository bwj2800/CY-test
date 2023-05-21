import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

export default function FormPropsTextFields() {
  return (
    <div style={{display: 'flex', margin: 30}}>
        <Grid container spacing={2} xs={10}>
            <Grid item xs={2}>
                <TextField sx={{ width: '100%' }} required id="outlined-required" label="회사명"/>
            </Grid>
            <Grid item xs={2}>
                <TextField sx={{ width: '100%' }} id="outlined-required" label="회사종류"/>
            </Grid>
            <Grid item xs={2}>
                <TextField sx={{ width: '100%' }} id="outlined-required" label="판매상품"/>
            </Grid>
            <Grid item xs={2}>
                <TextField sx={{ width: '100%' }} id="outlined-required" label="대표"/>
            </Grid>
            <Grid item xs={4}>
                <TextField sx={{ width: '100%' }} id="outlined-required" label="홈페이지"/>
            </Grid>
            
            <Grid item xs={6}>
                <TextField sx={{ width: '100%' }} id="outlined-required" label="주소"/>
            </Grid>
            <Grid item xs={6}>
                <TextField sx={{ width: '100%' }} id="outlined-required" label="연락처"/>
            </Grid>

            <Grid item xs={12}>
                <TextField sx={{ width: '100%' }} id="outlined-multiline-static" label="기업설명" multiline rows={4}/>
            </Grid>
        </Grid>
        <Grid container spacing={2} xs={1} style={{marginLeft: 10}}>
            <Grid item xs={12}>
                <Button sx={{ width: '100%', height: '100%' }} variant="contained">데이터 추가</Button>
            </Grid>
        </Grid>
        <Grid container spacing={2} xs={1} style={{marginLeft: 10}}>
            <Grid item xs={12}>
                <Button sx={{ width: '100%', height: '100%' }} variant="contained">데이터 검색</Button>
            </Grid>
        </Grid>
    </div>
  );
}