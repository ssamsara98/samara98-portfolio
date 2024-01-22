'use client';
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Flex,
  Heading,
  Icon,
  IconButton,
  Image,
  Input,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import {
  HiArrowLeft,
  HiArrowRight,
  HiBriefcase,
  HiCalendar,
  HiLocationMarker,
  HiPlay,
  HiStar,
  HiTicket,
} from 'react-icons/hi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import heroImg from '~/assets/travlog/hero.png';
import travelPointImg from '~/assets/travlog/travel-point.png';
import keyFeatureImg from '~/assets/travlog/key-feature.png';
import { destinations, services, testimonials } from './dummy';

export function TravelogClient() {
  return (
    <>
      {/* hero */}
      <Flex flexDir={{ base: 'column', laptop: 'row' }} alignItems={'center'}>
        <Image src={heroImg.src} alt={heroImg.src} flex={1} order={{ base: '1', laptop: '2' }} />

        <Box textAlign={{ base: 'center', laptop: 'left' }} order={{ base: '2', laptop: '1' }}>
          <Button
            rightIcon={<Icon as={HiBriefcase} />}
            colorScheme="pink"
            variant={'ghost'}
            px={'10'}
            py={'4'}
            mb={'12'}
          >
            Explore the world!
          </Button>

          <Heading size={'4xl'} mb={'12'}>
            Travel{' '}
            <Box as="span" color={'pink.500'}>
              top destination
            </Box>{' '}
            of the world
          </Heading>

          <Text color={'gray.500'} mb={'12'}>
            We always make our customer happy by providing as many choices as possible{' '}
          </Text>

          <Stack spacing={'6'} flexDirection={{ base: 'column', tablet: 'row' }} justifyContent={'center'}>
            <Button colorScheme="purple" rounded={'full'} px={'8'} py={'4'}>
              Get Started
            </Button>
            <Button
              leftIcon={<Icon as={HiPlay} color={'purple.500'} />}
              colorScheme="purple"
              variant={'outline'}
              rounded={'full'}
              px={'8'}
              py={'4'}
            >
              Watch Demo
            </Button>
          </Stack>
        </Box>
      </Flex>

      {/* Service */}
      <Flex flexDir={{ base: 'column', laptop: 'row' }} gap={'16'} my={'24'}>
        <Stack textAlign={{ base: 'center', laptop: 'left' }} spacing={'6'}>
          <Heading as="h3" size={'lg'} color={'pink.500'}>
            Services
          </Heading>
          <Heading as="h4">Our top value categories for you</Heading>
        </Stack>

        <Flex flexDir={{ base: 'column', tablet: 'row' }} gap={'4'} overflowX={'auto'}>
          {services.map((serv, idx) => (
            <Card key={idx} shadow={'xl'}>
              <CardBody display={'flex'} flexDir={'column'} alignItems={'center'} gap={'8'}>
                <Image src={serv.image.src} alt={serv.image.src} mx={'auto'} />
                <Heading as="h5" size={'md'}>
                  {serv.title}
                </Heading>
                <Text>{serv.content}</Text>
              </CardBody>
            </Card>
          ))}
        </Flex>
      </Flex>

      {/* top destination */}
      <Stack spacing={'16'} my={'24'}>
        <Flex justifyContent={'space-between'} alignItems={'center'}>
          <Stack textAlign={{ base: 'center', laptop: 'left' }} spacing={'6'}>
            <Heading as="h3" size={'lg'} color={'pink.500'}>
              Top Destinations
            </Heading>
            <Heading as="h4">Explore top destinations</Heading>
          </Stack>

          <ButtonGroup spacing={'4'}>
            <IconButton
              icon={<Icon as={HiArrowLeft} />}
              aria-label="destinations-swiper-prev"
              size={'lg'}
              id="destinations-swiper-prev"
              colorScheme={'purple'}
              variant={'outline'}
              rounded={'full'}
            />
            <IconButton
              icon={<Icon as={HiArrowRight} />}
              aria-label="destinations-swiper-next"
              size={'lg'}
              id="destinations-swiper-next"
              colorScheme={'purple'}
              variant={'outline'}
              rounded={'full'}
            />
          </ButtonGroup>
        </Flex>

        <Box overflowX={'auto'}>
          <Swiper
            id="destinations-swiper"
            modules={[Navigation]}
            navigation={{
              enabled: true,
              prevEl: '#destinations-swiper-prev',
              nextEl: '#destinations-swiper-next',
            }}
            slidesPerView={'auto'}
            spaceBetween={34}
          >
            {destinations.map((dest, idx) => (
              <SwiperSlide key={idx} className="py-4">
                <Card boxShadow={'xl'} rounded={'32px'}>
                  <Image src={dest.image.src} alt={dest.image.src} />
                  <CardBody
                    display={'flex'}
                    flexDir={{ base: 'column', laptop: 'row' }}
                    justifyContent={'space-between'}
                  >
                    <Text order={{ base: '1', laptop: '2' }} color={'pink.500'} fontWeight={'bold'}>
                      {dest.price}
                    </Text>
                    <Stack order={{ base: '2', laptop: '1' }} spacing={'4'} className="w-1/2">
                      <Text fontWeight={'bold'}>{dest.name}</Text>
                      <Text color={'gray.500'}>{dest.location}</Text>
                      <Text color={'orange.500'} fontWeight={'bold'} display={'inline-flex'} alignItems={'center'}>
                        {dest.rating} <Icon as={HiStar} fontSize={'lg'} />
                      </Text>
                    </Stack>
                  </CardBody>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Stack>

      {/* travel point */}
      <Flex flexDir={{ base: 'column', laptop: 'row' }} gap={'16'} my={'24'}>
        <Image src={travelPointImg.src} alt={travelPointImg.src} ml={{ laptop: '-128px' }} />

        <Stack textAlign={{ base: 'center', laptop: 'left' }} spacing={'6'}>
          <Heading as="h3" size={'lg'} color={'pink.500'}>
            Travel Point
          </Heading>
          <Heading as="h4">We helping you find your dream location</Heading>
          <Text color={'gary.500'}>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
            Latin literature from 45 BC.
          </Text>

          <SimpleGrid columns={{ base: 1, tablet: 2 }} gap={'8'}>
            <Box textAlign={'center'} p={'8'}>
              <Heading as="h4" color={'orange.500'}>
                500+
              </Heading>
              <Text color={'gary.500'}>Holiday Packages</Text>
            </Box>
            <Box textAlign={'center'} p={'8'}>
              <Heading as="h4" color={'orange.500'}>
                100
              </Heading>
              <Text color={'gary.500'}>Luxury Hotels</Text>
            </Box>
            <Box textAlign={'center'} p={'8'}>
              <Heading as="h4" color={'orange.500'}>
                7
              </Heading>
              <Text color={'gary.500'}>Premium Airlines</Text>
            </Box>
            <Box textAlign={'center'} p={'8'}>
              <Heading as="h4" color={'orange.500'}>
                2k+
              </Heading>
              <Text color={'gary.500'}>Happy Customers</Text>
            </Box>
          </SimpleGrid>
        </Stack>
      </Flex>

      {/* key features */}
      <Flex flexDir={{ base: 'column', laptop: 'row' }} gap={'16'} my={'24'} position={'relative'}>
        <Image
          src={keyFeatureImg.src}
          alt={keyFeatureImg.src}
          w={'full'}
          ml={{ laptop: '-128px' }}
          order={{ base: '1', laptop: '2' }}
        />

        <Stack textAlign={{ base: 'center', laptop: 'left' }} spacing={'12'} order={{ base: '2', laptop: '1' }}>
          <Stack textAlign={{ base: 'center', laptop: 'left' }} spacing={'6'}>
            <Heading as="h3" size={'lg'} color={'pink.500'}>
              Key Features
            </Heading>
            <Heading as="h4">We offer best services</Heading>
            <Text color={'gary.500'}>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
              Latin literature from 45 BC.
            </Text>
          </Stack>

          <Stack textAlign={{ base: 'center', laptop: 'left' }}>
            <Flex flexDir={{ base: 'column', tablet: 'row' }} alignItems={'center'} p={'8'} gap={'8'}>
              <Icon
                as={HiLocationMarker}
                color={'white'}
                bgColor={'orange.400'}
                fontSize={'8xl'}
                p={'4'}
                rounded={'3xl'}
              />
              <Box>
                <Text>We offer best services</Text>
                <Text>Lorem Ipsum is not simply random text</Text>
              </Box>
            </Flex>
            <Flex flexDir={{ base: 'column', tablet: 'row' }} alignItems={'center'} p={'8'} gap={'8'}>
              <Icon as={HiCalendar} color={'white'} bgColor={'yellow.400'} fontSize={'8xl'} p={'4'} rounded={'3xl'} />
              <Box>
                <Text>Schedule your trip</Text>
                <Text>It has roots in a piece of classical</Text>
              </Box>
            </Flex>
            <Flex flexDir={{ base: 'column', tablet: 'row' }} alignItems={'center'} p={'8'} gap={'8'}>
              <Icon as={HiTicket} color={'white'} bgColor={'pink.400'} fontSize={'8xl'} p={'4'} rounded={'3xl'} />
              <Box>
                <Text>Get discounted coupons</Text>
                <Text>Lorem Ipsum is not simply random text</Text>
              </Box>
            </Flex>
          </Stack>
        </Stack>
      </Flex>

      {/* Testimonials */}
      <Stack spacing={'16'} my={'24'}>
        <Stack textAlign={'center'} spacing={'6'}>
          <Heading as="h3" size={'lg'} color={'pink.500'}>
            Testimonials
          </Heading>
          <Heading as="h4">Trust our clients</Heading>
        </Stack>

        <Box>
          <Swiper
            id={'testimonials-swiper'}
            modules={[Navigation, Pagination]}
            navigation={{
              enabled: true,
              // prevEl: '#testimonials-swiper-prev',
              // nextEl: '#testimonials-swiper-next',
            }}
            pagination={{
              enabled: true,
              clickable: true,
            }}
            slidesPerView={'auto'}
          >
            {testimonials.map((testi, idx) => (
              <SwiperSlide key={idx}>
                <Stack spacing={'14'} alignItems={'center'}>
                  <Image src={testi.image.src} alt={testi.image.src} w={'32'} />

                  <Stack spacing={'8'} alignContent={'center'} fontSize={{ base: 'xl', tablet: '2xl', laptop: '4xl' }}>
                    <Text fontWeight={'bold'}>
                      <Box as="span" color={'orange.500'}>
                        {testi.name}
                      </Box>{' '}
                      / {testi.profession}
                    </Text>

                    <Stack
                      spacing={'1'}
                      color={'yellow.500'}
                      direction={'row'}
                      fontSize={'2xl'}
                      justifyContent={'center'}
                    >
                      <Icon as={HiStar} />
                      <Icon as={HiStar} />
                      <Icon as={HiStar} />
                      <Icon as={HiStar} />
                      <Icon as={HiStar} />
                    </Stack>
                  </Stack>

                  <Text textAlign={'center'}>{testi.quote}</Text>
                </Stack>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Stack>

      {/* subcribe */}
      <Stack alignItems={'center'} spacing={'16'} py={'32'} my={'16'}>
        <Stack textAlign={'center'} spacing={'6'}>
          <Heading as="h3" size={'lg'} color={'pink.500'}>
            Subscribe to our newsletter
          </Heading>
          <Heading as="h4" size={'2xl'}>
            Prepare yourself & let’s explore the beauty of the world
          </Heading>
        </Stack>

        <Flex
          direction={{ base: 'column', tablet: 'row' }}
          justifyContent={'space-between'}
          gap={'8'}
          flex={'1'}
          alignItems={'center'}
          alignSelf={'stretch'}
        >
          <Input
            // leftIcon={<Icon as={HiMail} />}
            size={'lg'}
            color={'gray.500'}
            placeholder="Your Email"
          />

          <Button colorScheme="purple" size={'lg'} alignSelf={'stretch'}>
            Subcribe
          </Button>
        </Flex>
      </Stack>
    </>
  );
}
