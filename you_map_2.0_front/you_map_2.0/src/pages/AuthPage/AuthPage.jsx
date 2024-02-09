import { Container, Flex, VStack, Box, Image } from "@chakra-ui/react";
import AuthForm from "../../authentication/AuthForm/AuthForm";
import GoogleAuth from "../../authentication/AuthForm/GoogleAuth";

const AuthPage = () => {
	return (
		<Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
			<Container maxW={"container.md"} padding={0}>
				<Flex justifyContent={"center"} alignItems={"center"} gap={10}>


					{/* Right hand-side */}
					<VStack spacing={4} align={"stretch"}>
						<AuthForm />
						<Box textAlign={"center"}>Get the app.</Box>
					</VStack>
					<VStack spacing={4} align={"stretch"}>
						<GoogleAuth />
						<Box textAlign={"center"}>Get the app.</Box>
					</VStack>
				</Flex>
			</Container>
		</Flex>
	);
};

export default AuthPage;