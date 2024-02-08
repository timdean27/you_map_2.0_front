import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "../../components/SideBar";
import { useLocation } from "react-router-dom";

import React from 'react'

const PageLayout = ({children}) => {
const {pathname} = useLocation()

  return (
    <Flex>
{/* sidebar on the left */}
{pathname !== "/auth" ? (<Box w={{base:"70px", md: "240px"}}>
    <Sidebar/>
</Box>): null}
{/* the page content on the right */}

<Box flex={1} w={{base:"clac(100% -70px)", md: "clac(100%-240px)"}}>
    {children}
</Box>
    </Flex>
  )
}

export default PageLayout