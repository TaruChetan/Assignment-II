import { Image, Heading, Text, Stack, Button, Box } from "@chakra-ui/react";

const UserDetails = (data) => {
  if (!data) {
    return null;
  }
  const { avatar_url, login, name, public_repos, public_gists, created_at } =
    data.data;
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          style={{
            border: "solid white 5px",
            borderRadius: "10px",
            height: "60%",
            width: "70%",
            justifyContent: "center",
          }}
          borderRadius="xl"
          overflow="hidden"
          bgColor="#f2f2f2"
        >
          <Stack
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              style={{ objectFit: "fill" }}
              objectFit="cover"
              maxW={{ base: "100%", sm: "200px" }}
              src={avatar_url}
              alt={`Profile of ${name}`}
            />

            <Stack p="4" spacing="4">
              <Heading size="md">{name}</Heading>

              <Text fontSize="sm" color="gray.500">
                @{login}
              </Text>

              <Text>
                <strong>Public Repos:</strong> {public_repos}
              </Text>

              <Text>
                <strong>Public Gists:</strong> {public_gists}
              </Text>

              <Text>
                <strong>Profile Created At:</strong>{" "}
                {new Date(created_at).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </Text>
            </Stack>
          </Stack>
        </Box>
      </div>
    </>
  );
};

export default UserDetails;
