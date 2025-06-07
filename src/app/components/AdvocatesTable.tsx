import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from "@mui/material";
import { AdvocateDTO } from "@/types/advocate";

type Props = {
    advocates: AdvocateDTO[];
}

export default function AdvocatesTable({ advocates }: Props) {
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow
                        sx={{
                            backgroundColor: ' #265b4e',
                        }}>
                        <TableCell
                            sx={{
                                fontFamily: 'Inter',
                                fontWeight: '800',
                                fontSize: '14px',
                                color: '#E9EDF0',
                                lineHeight: '12px',
                                borderBottom: '1px solid #E9EDF0',
                                textAlign: 'center',
                            }}>
                            First Name
                        </TableCell>
                        <TableCell
                            sx={{
                                fontFamily: 'Inter',
                                fontWeight: '800',
                                fontSize: '14px',
                                color: '#E9EDF0',
                                lineHeight: '12px',
                                borderBottom: '1px solid #E9EDF0',
                                textAlign: 'center',
                            }}>
                            Last Name
                        </TableCell>
                        <TableCell
                            sx={{
                                fontFamily: 'Inter',
                                fontWeight: '800',
                                fontSize: '14px',
                                color: '#E9EDF0',
                                lineHeight: '12px',
                                borderBottom: '1px solid #E9EDF0',
                                textAlign: 'center',
                            }}>
                            City
                        </TableCell>
                        <TableCell
                            sx={{
                                fontFamily: 'Inter',
                                fontWeight: '800',
                                fontSize: '14px',
                                color: '#E9EDF0',
                                lineHeight: '12px',
                                borderBottom: '1px solid #E9EDF0',
                                textAlign: 'center',
                            }}>
                            Degree
                        </TableCell>
                        <TableCell
                            sx={{
                                fontFamily: 'Inter',
                                fontWeight: '800',
                                fontSize: '14px',
                                color: '#E9EDF0',
                                lineHeight: '12px',
                                borderBottom: '1px solid #E9EDF0',
                                textAlign: 'center',
                            }}>
                            Specialties
                        </TableCell>
                        <TableCell
                            sx={{
                                fontFamily: 'Inter',
                                fontWeight: '800',
                                fontSize: '14px',
                                color: '#E9EDF0',
                                lineHeight: '12px',
                                borderBottom: '1px solid #E9EDF0',
                                textAlign: 'center',
                            }}>
                            Years of Experience
                        </TableCell>
                        <TableCell
                            sx={{
                                fontFamily: 'Inter',
                                fontWeight: '800',
                                fontSize: '14px',
                                color: '#E9EDF0',
                                lineHeight: '12px',
                                borderBottom: '1px solid #E9EDF0',
                                textAlign: 'center',
                            }}>
                            Phone Number
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {advocates.map((advocate) => {
                        return (
                            <TableRow
                                key={advocate.id}
                                sx={{
                                    padding: '16px',
                                    color: '#2E3645',
                                }}
                            >
                                <TableCell
                                    sx={{
                                        fontFamily: 'Inter',
                                        fontWeight: '400',
                                        fontSize: '13px',
                                        color: '#2E3645',
                                        lineHeight: '13px',
                                        textAlign: 'center',
                                        width: '55px',
                                    }}>
                                    {advocate.firstName}
                                </TableCell>
                                <TableCell
                                    sx={{
                                        fontFamily: 'Inter',
                                        fontWeight: '400',
                                        fontSize: '13px',
                                        color: '#2E3645',
                                        lineHeight: '13px',
                                        textAlign: 'center',
                                        width: '55px',
                                    }}>
                                    {advocate.lastName}
                                </TableCell>
                                <TableCell
                                    sx={{
                                        fontFamily: 'Inter',
                                        fontWeight: '400',
                                        fontSize: '13px',
                                        color: '#2E3645',
                                        lineHeight: '13px',
                                        textAlign: 'center',
                                        width: '55px',
                                    }}>
                                    {advocate.city}
                                </TableCell>
                                <TableCell
                                    sx={{
                                        fontFamily: 'Inter',
                                        fontWeight: '400',
                                        fontSize: '13px',
                                        color: '#2E3645',
                                        lineHeight: '13px',
                                        textAlign: 'center',
                                        width: '55px',
                                    }}>
                                    {advocate.degree}
                                </TableCell>
                                <TableCell
                                    sx={{
                                        fontFamily: 'Inter',
                                        fontWeight: '400',
                                        fontSize: '13px',
                                        color: '#2E3645',
                                        lineHeight: '13px',
                                        textAlign: 'center',
                                        width: '55px',
                                    }}>
                                    {(advocate.specialties || []).map((s, idx) => (
                                        <div key={`${s}-${idx}`}>{s}</div>
                                    ))}
                                </TableCell>
                                <TableCell
                                    sx={{
                                        fontFamily: 'Inter',
                                        fontWeight: '400',
                                        fontSize: '13px',
                                        color: '#2E3645',
                                        lineHeight: '13px',
                                        textAlign: 'center',
                                        width: '55px',
                                    }}>
                                    {advocate.yearsOfExperience}
                                </TableCell>
                                <TableCell
                                    sx={{
                                        fontFamily: 'Inter',
                                        fontWeight: '400',
                                        fontSize: '13px',
                                        color: '#2E3645',
                                        lineHeight: '13px',
                                        textAlign: 'center',
                                        width: '55px',
                                    }}>
                                    {advocate.phoneNumber}
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}