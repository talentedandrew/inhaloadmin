import Paper from '@material-ui/core/Paper';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import * as React from 'react';
import {styles} from './styles';

class CompanyDetails extends React.Component<any & WithStyles<typeof styles>, any> {

    public render() {
        const {classes, data} = this.props;

        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Field name</TableCell>
                            <TableCell align="right">Value</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                Company name
                            </TableCell>
                            <TableCell align="right">{data.name}</TableCell>
                        </TableRow>
                        {data.officers.map((officer: any) => (
                            <TableRow key={officer.id}>
                                <TableCell align="right">{officer.name}</TableCell>
                                <TableCell component="th" scope="row">
                                    {officer.title}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {officer.birthday.month + '/' + officer.birthday.year}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {this.getAddress(officer.address)}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        );
    }

    private getAddress(address: any): string {
        // @ts-ignore
        return Object.values(address).join(',');
    }
}

export const CompanyDetailsComponent = withStyles(styles)(CompanyDetails);
