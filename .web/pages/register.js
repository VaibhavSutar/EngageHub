/** @jsxImportSource @emotion/react */


import { Fragment, useCallback } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Container, Heading, HStack, Input, Link, VStack } from "@chakra-ui/react"
import NextLink from "next/link"
import "focus-visible/dist/focus-visible"
import { getRefValue, getRefValues, set_val } from "/utils/state"
import NextHead from "next/head"



export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <Container sx={{"max-width": "100vw", "text-align": "center", "background-color": "#F8F8FA"}}>
  <Box sx={{"backdropFilter": "auto", "backdropBlur": "lg", "p": "4", "position": "sticky", "top": "0", "zIndex": "100"}}>
  <HStack justify={`space-between`}>
  <HStack>
  <Breadcrumb>
  <BreadcrumbItem>
  <BreadcrumbLink as={NextLink} href={`/`}>
  <Heading size={`xl`} sx={{"color": "indigo"}}>
  {`EngageHub`}
</Heading>
</BreadcrumbLink>
</BreadcrumbItem>
</Breadcrumb>
</HStack>
  <HStack>
  <Link as={NextLink} href={`/gallery`} sx={{"button": true}}>
  <Button colorScheme={`none`} size={`lg`} sx={{"color": "indigo"}}>
  {`Event Gallery`}
</Button>
</Link>
  <Link as={NextLink} href={`https://reflex.dev`} sx={{"button": true}}>
  <Button colorScheme={`none`} size={`lg`} sx={{"color": "indigo"}}>
  {`About Us`}
</Button>
</Link>
</HStack>
  <HStack spacing={`8`}>
  <Link as={NextLink} href={`/signIn`} sx={{"color": "indigo", "mr": "2"}}>
  {`Login`}
</Link>
  <Link as={NextLink} href={`/signUp`} sx={{"button": true}}>
  <Button sx={{"bg": "indigo", "color": "white"}}>
  {`SignUp`}
</Button>
</Link>
</HStack>
</HStack>
</Box>
  <Heading sx={{"color": "indigo"}}>
  {`Register`}
</Heading>
  <VStack>
  <Box as={`form`} sx={{"padding": "2em", "width": "500px", "margin-top": "3em"}}>
  <VStack>
  <Input name={`event_title`} placeholder={`Event Title`} sx={{"margin-bottom": "1em", "marginBottom": "1em", "width": "100%"}} type={`text`}/>
  <Input name={`email`} placeholder={`Enter your email`} sx={{"margin-bottom": "1em", "marginBottom": "1em", "width": "100%"}} type={`email`}/>
  <Input name={`event_venue`} placeholder={`Event Venue`} sx={{"margin-bottom": "1em", "marginBottom": "1em", "width": "100%"}} type={`text`}/>
  <Input name={`start_time`} placeholder={`Start time`} sx={{"margin-bottom": "1em", "marginBottom": "1em", "width": "100%"}} type={`text`}/>
  <Input name={`start_date`} placeholder={`Start date`} sx={{"margin-bottom": "1em", "marginBottom": "1em", "width": "100%"}} type={`date`}/>
  <Input name={`end_time`} placeholder={`End time`} sx={{"margin-bottom": "1em", "marginBottom": "1em", "width": "100%"}} type={`text`}/>
  <Input name={`end_date`} placeholder={`End date`} sx={{"margin-bottom": "1em", "marginBottom": "1em", "width": "100%"}} type={`date`}/>
  <Input name={`email`} placeholder={`Enter your email`} sx={{"margin-bottom": "1em", "marginBottom": "1em", "width": "100%"}} type={`email`}/>
  <Button sx={{"margin-top": "3em", "bg": "indigo", "color": "white", "marginTop": "5em"}} type={`submit`} variant={`outline`}>
  {`Create Event`}
</Button>
</VStack>
</Box>
</VStack>
</Container>
  <NextHead>
  <title>
  {`Reflex App`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}