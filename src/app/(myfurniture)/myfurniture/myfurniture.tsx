'use client';
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Icon,
  IconButton,
  Image,
  Input,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react';
import { BiChevronLeft, BiChevronRight, BiShoppingBag, BiSolidStar } from 'react-icons/bi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import clockImg from '~/assets/myfurniture/clock.png';
import contactusImg from '~/assets/myfurniture/contact-us.png';
import sofaImg from '~/assets/myfurniture/sofa.png';
import { MyContainer } from './container';
import { arrivalProducts, blogs, categories, hotDeals, services } from './dummy';

export function MyFurniture() {
  return (
    <>
      {/* Hero */}
      <Box bgColor={'furniture.primary'} color={'furniture.secondary'} mb={'48'}>
        <MyContainer mt={'80'} display={'flex'} gap={'6'}>
          <Box w={{ base: 'full', md: '600px' }} mb={'12'}>
            <Text fontSize={{ base: '3xl', md: '5xl' }} fontWeight={'bold'} mb={'6'}>
              Make Your Interior More Modern and Minimalist
            </Text>

            <Text fontSize={{ base: 'md', md: 'xl' }} color={'white'} mb={'16'}>
              There are several product variants that you can choose, both local and foreign brands
            </Text>

            <Flex gap={'8'}>
              <Button colorScheme="orange" bgColor={'furniture.secondary'} color={'black'} w={'160px'} h={'64px'}>
                Buy Now
              </Button>
              <Button colorScheme="orange" variant={'outline'} color={'currentcolor'} w={'160px'} h={'64px'}>
                Learn More
              </Button>
            </Flex>
          </Box>

          <Box position={'relative'} flex={'1'} display={{ base: 'none', lg: 'block' }}>
            <Image src={clockImg.src} position={'absolute'} top={'-24'} right={'0'} />
            <Image src={sofaImg.src} position={'absolute'} bottom={'-20'} right={'0'} />
          </Box>
        </MyContainer>
      </Box>

      <MyContainer mb={'48'}>
        {/* Services */}
        <Box mb={'48'}>
          <Box textAlign={'center'} mb={'20'}>
            <Text fontSize={'3xl'} fontWeight={'bold'}>
              Our Services
            </Text>
            <Text fontSize={'lg'}>We provide quality and comfortable interior fittings</Text>
          </Box>

          <Flex rounded={'lg'} flexWrap={'wrap'}>
            {services.map((service, idx) => (
              <Box key={idx} w={{ base: 'full', lg: 'calc(100% / 3)' }} px={'2'}>
                <Flex
                  bgColor={'furniture.primary'}
                  color={'white'}
                  p={'6'}
                  borderRadius={'lg'}
                  justify={'space-between'}
                  overflow={'hidden'}
                  my={'1'}
                >
                  <Flex direction={'column'} justify={'space-between'} flex={'1'}>
                    <Text fontSize={{ base: 'xs', md: 'md' }}>{service.type}</Text>
                    <Text fontSize={{ base: 'xl', md: '3xl' }} mb={'8'} fontWeight={'bold'}>
                      {service.category}
                    </Text>
                    <Button
                      colorScheme="gray"
                      variant={'outline'}
                      leftIcon={<BiShoppingBag />}
                      color={'furniture.secondary'}
                      fontSize={{ base: 'xs', md: 'md' }}
                      borderColor={'currentcolor'}
                      w={'80%'}
                      _hover={{ color: 'black', bgColor: 'furniture.secondary' }}
                    >
                      Shop
                    </Button>
                  </Flex>
                  {/* <Box flex={'1'}></Box> */}
                  <Image src={service.image.src} h={'200px'} flex={'1'} objectFit={'contain'} />
                </Flex>
              </Box>
            ))}
          </Flex>
        </Box>

        {/* Sales */}
        <Box
          rounded={'lg'}
          color={'white'}
          bgColor={'furniture.primary'}
          position={'relative'}
          px={{ base: '12', md: '28' }}
          py={{ base: '8', md: '14' }}
          mb={'48'}
          overflow={'hidden'}
        >
          <Image
            src={sofaImg.src}
            w={'380px'}
            h={'200px'}
            position={'absolute'}
            bottom={'0'}
            right={'14'}
            transform={'translate(0, 30%)'}
            zIndex={0}
          />

          <Box position={'relative'} zIndex={1}>
            <Text fontSize={{ base: 'md', md: 'xl' }}>Black Friday</Text>
            <Text fontSize={{ base: '2xl', md: '4xl' }} mb={'8'}>
              Sale Up To
              <Box as="span" color={'furniture.secondary'}>
                50%
              </Box>
              Off
            </Text>
            <Button
              fontSize={{ base: 'xs', md: 'md' }}
              bgColor={'furniture.secondary'}
              w={{ base: '80px', md: '160px' }}
              h={{ base: '48px', md: '64px' }}
            >
              Shop Now
            </Button>
          </Box>
        </Box>

        {/* Product */}
        <Box mb={'48'}>
          <Box textAlign={'center'} mb={'24'}>
            <Text fontWeight={'bold'} fontSize={'3xl'}>
              Our Product
            </Text>
            <Text fontSize={'lg'}>Available for all your needs</Text>
          </Box>

          {/* Popular Category */}
          <Box mb={'24'}>
            <Flex justify={'space-between'} mb={'12'}>
              <Text fontSize={'2xl'} fontWeight={'bold'}>
                Populer Categories
              </Text>
              <Flex gap={'4'}>
                <IconButton
                  icon={<BiChevronLeft />}
                  id="popular-categories-prev"
                  aria-label="popular-categories-prev"
                  bgColor={'furniture.secondary'}
                  rounded={'100px'}
                  size={'lg'}
                />
                <IconButton
                  icon={<BiChevronRight />}
                  id="popular-categories-next"
                  aria-label="popular-categories-next"
                  bgColor={'furniture.secondary'}
                  rounded={'100px'}
                  size={'lg'}
                />
              </Flex>
            </Flex>
            <Swiper
              id="popular-categories-swiper"
              modules={[Navigation]}
              navigation={{
                prevEl: '#popular-categories-prev',
                nextEl: '#popular-categories-next',
                enabled: true,
              }}
              slidesPerView={'auto'}
              spaceBetween={32}
            >
              {categories.map((category, idx) => (
                <SwiperSlide key={idx}>
                  <Box
                    h={'300px'}
                    position={'relative'}
                    border={'2px solid'}
                    borderColor={'furniture.primary'}
                    rounded={'lg'}
                    mb={'10'}
                  >
                    <Image
                      src={category.image.src}
                      htmlHeight={'200px'}
                      p={'30px'}
                      objectFit={'contain'}
                      position={'absolute'}
                      top={'50%'}
                      left={'50%'}
                      transform={'translate(-50%, -50%)'}
                    />
                  </Box>

                  <Flex justifyContent={'space-between'} height={'20'}>
                    <Flex direction={'column'} justify={'space-between'}>
                      <Button
                        colorScheme={'facebook'}
                        w={'28'}
                        h={'10'}
                        bgColor={'furniture.primary'}
                        borderRadius={'none'}
                      >
                        {category.name}
                      </Button>
                      <Text>{category.totalProduct} Product</Text>
                    </Flex>
                    <IconButton
                      icon={<Icon as={BiShoppingBag} fontSize={'3xl'} />}
                      aria-label="populer-categories-buy"
                      variant={'outline'}
                      boxSize={'20'}
                      color={'furniture.secondary'}
                      borderColor={'currentcolor'}
                      _hover={{ color: 'black', bgColor: 'furniture.secondary' }}
                    />
                  </Flex>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>

          {/* New Arrival Product */}
          <Box>
            <Text fontSize={'2xl'} fontWeight={'bold'} mb={'16'}>
              New Arrival Product
            </Text>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacingX={'10'} spacingY={'6'} mb={'20'}>
              {arrivalProducts.map((product, idx) => (
                <Box key={idx} rounded={'lg'} overflow={'hidden'} shadow={'2xl'}>
                  <Box h={'300px'} w={'full'} bgColor={'furniture.primary'} position={'relative'}>
                    <Image
                      src={product.image.src}
                      w={'125px'}
                      h={'200px'}
                      position={'absolute'}
                      top={'50%'}
                      left={'50%'}
                      transform={'translate(-50%, -50%)'}
                    />
                  </Box>
                  <Box position={'relative'}>
                    <Box p={'5'}>
                      <Text fontSize={'lg'} fontWeight={'bold'}>
                        {product.name}
                      </Text>
                      <Text mb={'8'}>
                        <Icon as={BiSolidStar} />
                        <Icon as={BiSolidStar} />
                        <Icon as={BiSolidStar} />
                        <Icon as={BiSolidStar} />
                        <Icon as={BiSolidStar} /> ({product.totalReview})
                      </Text>

                      <Text fontSize={'2xl'} fontWeight={'bold'}>
                        {product.price}
                      </Text>
                    </Box>

                    <IconButton
                      icon={<Icon as={BiShoppingBag} fontSize={'2xl'} />}
                      aria-label="new-arrival-product-buy"
                      variant={'outline'}
                      boxSize={'16'}
                      rounded={'lg'}
                      position={'absolute'}
                      bottom={'0'}
                      right={'0'}
                      color={'furniture.secondary'}
                      borderColor={'currentcolor'}
                      _hover={{ color: 'black', bgColor: 'furniture.secondary' }}
                    />
                  </Box>
                </Box>
              ))}
            </SimpleGrid>

            <Box textAlign={'center'}>
              <Button fontSize={'lg'} bgColor={'furniture.secondary'}>
                Go Shop For View More
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Hot Deal */}
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={'8'} mb={'40'}>
          {hotDeals.map((deal, idx) => (
            <Flex
              key={idx}
              bgColor={'furniture.primary'}
              color={'white'}
              px={{ base: '8', md: '14' }}
              py={{ base: '4', md: '8' }}
              align={'center'}
              justify={'space-between'}
              rounded={'lg'}
              overflow={'hidden'}
            >
              <Box w={'50%'} zIndex={1}>
                <Text fontSize={{ base: 'md', md: 'xl' }}>Hot Deal</Text>
                <Text fontSize={{ base: 'xl', md: '3xl' }}>{deal.name}</Text>
                <Flex gap={'8'} mt={'12'}>
                  <Text fontSize={'xl'} textDecor={'line-through'}>
                    {deal.normalPrice}
                  </Text>
                  <Text fontSize={'xl'} color={'furniture.secondary'}>
                    {deal.discountedPrice}
                  </Text>
                </Flex>
              </Box>

              <Image src={deal.image.src} zIndex={0} />
            </Flex>
          ))}
        </SimpleGrid>

        {/* Blog */}
        <Box>
          <Box textAlign={'center'} mb={'24'}>
            <Text fontSize={'3xl'} fontWeight={'bold'}>
              Latest Blog
            </Text>
            <Text fontSize={'lg'}>we provide a variety of interesting information about the interior</Text>
          </Box>

          <Swiper
            id="blog-swiper"
            modules={[Pagination]}
            pagination={{ clickable: true }}
            slidesPerView={'auto'}
            spaceBetween={24}
          >
            {blogs.map((blog1, idx1) => (
              <SwiperSlide key={idx1}>
                {/* <SimpleGrid columns={4} spacingX={'8'}>
                    {blog1.map((blog2, idx2) => (
                      <Card key={idx2} shadow={'2xl'}>
                        <CardBody>
                          <Image src={blog2.image} />

                          <Stack mt={'6'} spacing="2">
                            <Heading size="md">{blog2.title}</Heading>
                            <Text size={'sm'}>{blog2.date}</Text>
                            <Text>{blog2.content}</Text>
                          </Stack>
                        </CardBody>

                        <CardFooter>
                          <Button bgColor={'furniture.secondary'}>Read more</Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </SimpleGrid> */}

                <Card key={idx1} shadow={'2xl'}>
                  <CardBody>
                    <Image src={blog1.image.src} />

                    <Stack mt={'6'} spacing="2">
                      <Heading size="md">{blog1.title}</Heading>
                      <Text size={'sm'}>{blog1.date}</Text>
                      <Text>{blog1.content}</Text>
                    </Stack>
                  </CardBody>

                  <CardFooter>
                    <Button bgColor={'furniture.secondary'}>Read more</Button>
                  </CardFooter>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>

        {/* Contact Us */}
        <Box>
          <Box textAlign={'center'} mb={'24'}>
            <Text fontSize={'2xl'}>Contact Us</Text>
            <Text fontSize={'lg'}>we serve you all the time</Text>
          </Box>

          <Flex gap={'6'} flexWrap={'wrap'}>
            <Image src={contactusImg.src} flex={'1'} />

            <Flex as="form" flex={'1'} direction={'column'} gap={'8'}>
              <Box>
                <Text as="label" htmlFor="fullname">
                  Full Name
                </Text>
                <Input id="fullname" mt={'3'} bgColor={'rgba(221, 193, 144, 0.5)'} />
              </Box>
              <Box>
                <Text as="label" htmlFor="email">
                  Email Address
                </Text>
                <Input id="email" mt={'3'} bgColor={'rgba(221, 193, 144, 0.5)'} />
              </Box>
              <Box flex={'1'}>
                <Text as="label" htmlFor="message">
                  Message
                </Text>
                <Textarea id="message" mt={'3'} height={'80%'} bgColor={'rgba(221, 193, 144, 0.5)'} />
              </Box>

              <Button bgColor={'furniture.secondary'}>Send Mail</Button>
            </Flex>
          </Flex>
        </Box>
      </MyContainer>
    </>
  );
}
