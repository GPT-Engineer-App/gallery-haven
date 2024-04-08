import React, { useState } from "react";
import { Box, Heading, Text, Image, Grid, GridItem, Button, Input, Textarea, Avatar, Stack, Link } from "@chakra-ui/react";
import { FaUpload, FaDownload } from "react-icons/fa";

const Index = () => {
  const [artworks, setArtworks] = useState([
    {
      id: 1,
      title: "Abstract Painting",
      artist: "John Doe",
      image: "https://images.unsplash.com/flagged/photo-1567934150921-7632371abb32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHBhaW50aW5nfGVufDB8fHx8MTcxMjU4NzU4Mnww&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: 2,
      title: "Landscape Photography",
      artist: "Jane Smith",
      image: "https://images.unsplash.com/photo-1604430456280-43f652c497aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsYW5kc2NhcGUlMjBwaG90b2dyYXBoeXxlbnwwfHx8fDE3MTI1ODc1ODN8MA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    // Add more sample artworks
  ]);

  const [uploadedArtwork, setUploadedArtwork] = useState({
    title: "",
    artist: "",
    image: null,
  });

  const handleInputChange = (e) => {
    setUploadedArtwork({
      ...uploadedArtwork,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageUpload = (e) => {
    setUploadedArtwork({
      ...uploadedArtwork,
      image: URL.createObjectURL(e.target.files[0]),
    });
  };

  const handleArtworkUpload = () => {
    if (uploadedArtwork.title && uploadedArtwork.artist && uploadedArtwork.image) {
      const newArtwork = {
        id: artworks.length + 1,
        ...uploadedArtwork,
      };
      setArtworks([...artworks, newArtwork]);
      setUploadedArtwork({
        title: "",
        artist: "",
        image: null,
      });
    }
  };

  return (
    <Box>
      <Heading as="h1" size="xl" textAlign="center" my={8}>
        Artist Portfolio
      </Heading>

      <Grid templateColumns="repeat(3, 1fr)" gap={8} my={8}>
        {artworks.map((artwork) => (
          <GridItem key={artwork.id}>
            <Box borderWidth={1} borderRadius="lg" overflow="hidden">
              <Image src={artwork.image} alt={artwork.title} />
              <Box p={4}>
                <Heading as="h3" size="md" mb={2}>
                  {artwork.title}
                </Heading>
                <Text>Artist: {artwork.artist}</Text>
                <Button
                  leftIcon={<FaDownload />}
                  colorScheme="blue"
                  size="sm"
                  mt={4}
                  onClick={() => {
                    // Implement download functionality
                  }}
                >
                  Download
                </Button>
              </Box>
            </Box>
          </GridItem>
        ))}
      </Grid>

      <Box my={8}>
        <Heading as="h2" size="lg" mb={4}>
          Upload Artwork
        </Heading>
        <Stack spacing={4}>
          <Input placeholder="Title" name="title" value={uploadedArtwork.title} onChange={handleInputChange} />
          <Input placeholder="Artist" name="artist" value={uploadedArtwork.artist} onChange={handleInputChange} />
          <Input type="file" accept="image/*" onChange={handleImageUpload} />
          <Button leftIcon={<FaUpload />} colorScheme="blue" onClick={handleArtworkUpload}>
            Upload
          </Button>
        </Stack>
      </Box>

      <Box my={8}>
        <Heading as="h2" size="lg" mb={4}>
          Artist Profile
        </Heading>
        <Avatar size="xl" name="Artist Name" src="https://images.unsplash.com/photo-1703420371268-85d78cfdc5cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhcnRpc3QlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTI1ODc1ODN8MA&ixlib=rb-4.0.3&q=80&w=1080" mb={4} />
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna a bibendum bibendum, augue magna tincidunt enim, eget ultricies magna augue eget est.</Text>
        <Link href="#" mt={4}>
          View Profile
        </Link>
      </Box>
    </Box>
  );
};

export default Index;
