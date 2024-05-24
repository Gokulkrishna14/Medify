import { Container, Box, Stack } from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
import HeroSlider from "../../components/HeroSlidder/HeroSlider";
import SearchHospital from "../../components/SearchHospitals/SearchHospitals";
import HeroServices from "../../components/HeroServices/HeroServices";
import Offers from "../../components/Offers/Offers";
import Specialization from "../../components/Specialization/Specialization";
import Specialists from "../../components/Specialists/Specialists";
import PatientCaring from "../../components/PatientCaring/PatientCaring";
import Blogs from "../../components/Blogs/Blogs";
import OurFamilies from "../../components/OurFamilies/OurFamilies";
import FAQs from "../../components/FAQs/FAQs";



export default function HomePage(){
    return (
        <Box>
            <Box
                sx={{
                background:
                "linear-gradient(#E7F0FF , rgba(232, 241, 255, 0.47) 90%, #fff 10%)",
                }}
                mb={4}
            >
                <Navbar />
                <Container maxWidth="xl">
                    <HeroSlider />
                    <Stack
                        p={{ xs: 2.5, md: 8 }}
                        mt={{ xs: -15, md: 0, lg: -8, xl: -28 }}
                        position="relative"
                        zIndex={99}
                        bgcolor="#fff"
                        borderRadius="15px"
                        spacing={10}
                        boxShadow="0 0 12px rgba(0,0,0,0.1)"
                    >
                        <SearchHospital />
                        <HeroServices />
                    </Stack>
                </Container>
            </Box>

            <Offers />

            <Specialization />

            <Specialists />

            <PatientCaring />

            <Blogs />

            <OurFamilies />

            <FAQs />

        </Box>
    )
}