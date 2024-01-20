'use client';
import { Avatar, Box, Button, Flex, Heading, Icon, Image, Input, Text, Textarea } from '@chakra-ui/react';
import { HiChevronLeft, HiChevronRight, HiShoppingBag, HiStar } from 'react-icons/hi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import home1 from '~/assets/plantshop/home1.png';
import home2 from '~/assets/plantshop/home2.png';
import home3 from '~/assets/plantshop/home3.png';
import customerService from '~/assets/plantshop/customer-service.png';
import { convenients, products, services, srvs, testimonis } from './dummy';

export function PlantShop() {
  return (
    <>
      {/* Jumbotron */}
      <Flex bgColor={'plantshop.green'} align={'center'} p={'24'} rounded={'2xl'}>
        <Box>
          <Box color={'plantshop.cream'} mb={'32'}>
            <Heading fontSize={'5xl'} color={'plantshop.yellow'}>
              More Cozy, More Fresh Environment
            </Heading>
            <Text fontSize={'2xl'}>
              Make your room cooler and more comfortable with a variety of ornamental plants arranged in your room
            </Text>
          </Box>
          <Flex gap={'10'}>
            <Button colorScheme="yellow" bgColor={'plantshop.yellow'} color={'plantshop.green'} size={'lg'}>
              Explore Now
            </Button>
            <Button
              colorScheme="yellow"
              variant={'outline'}
              borderColor={'plantshop.yellow'}
              color={'plantshop.yellow'}
              size={'lg'}
            >
              Learn More
            </Button>
          </Flex>
        </Box>
        <Box maxW={'500px'}>
          <Swiper
            slidesPerView={'auto'}
            centeredSlides={true}
            // spaceBetween={30}
            // autoplay={{delay: 2000}}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="jumbotron-swiper"
          >
            {srvs.map((serv, idx) => (
              <SwiperSlide key={idx}>
                <Image src={serv.img.src} margin={'auto'} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Flex>

      {/* Convenients */}
      <Flex align={'center'} gap={'24'}>
        {convenients.map((con, idx) => (
          <Flex key={idx} gap={8}>
            <Flex
              justify={'center'}
              align={'center'}
              bgColor={'plantshop.green'}
              color={'white'}
              borderTopLeftRadius={'3xl'}
              borderBottomRightRadius={'3xl'}
              p={5}
            >
              <Icon as={con.icon} boxSize={'36px'} />
            </Flex>
            <Box>
              <Text fontSize={'2xl'} fontWeight={'bold'}>
                {con.title}
              </Text>
              <Text color={'grey'}>{con.detail}</Text>
            </Box>
          </Flex>
        ))}
      </Flex>

      {/* Services */}
      <Box>
        <Box mx={'auto'} fontWeight={'bold'} textAlign={'center'} mb={24}>
          <Text color={'plantshop.green'}>WHAT WE SERVE</Text>
          <Text fontSize={'2xl'}>We provide quality plants and maintained care</Text>
        </Box>

        <Flex gap={6} align={'center'} justify={'space-between'}>
          {services.map((serv, idx) => (
            <Box key={idx} borderRadius={'xl'} overflow={'hidden'} position={'relative'} className="box">
              <Image src={serv.img.src} w={'330px'} h={'342px'} objectFit={'cover'} />
              <Box className="bg-hover">
                <Text className="bg-text">Calathea lutea</Text>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>

      {/* Special Offer */}
      <Flex gap={'30'} minHeight={'450px'} mb={'20'}>
        <Flex
          py={10}
          px={14}
          // w={'635px'}
          flex={'1 1 50%'}
          bgColor={'plantshop.green'}
          borderRadius={'lg'}
          position={'relative'}
          overflow={'hidden'}
        >
          <Box>
            <Box color={'white'} mb={'14'}>
              <Text fontSize={'lg'}>Beautiful Interior Plant</Text>
              <Text fontSize={'6xl'} fontWeight={'bold'} color={'plantshop.cream'} lineHeight={'none'}>
                BLACK
                <br />
                FRIDAY
                <br />
                SALE!
              </Text>
              <Text fontSize={'xl'}>Up to 50%</Text>
            </Box>
            <Button colorScheme="yellow" color={'plantshop.green'} bgColor={'plantshop.yellow'}>
              Click Banner
            </Button>
          </Box>
          <Image
            src={home2.src}
            position={'absolute'}
            bottom={-10}
            right={-10}
            w={'340px'}
            h={'390px'}
            objectFit={'cover'}
          />
        </Flex>
        <Flex flex={'1 1 50%'} direction={'column'} gap={8}>
          <Flex flex={1} align={'center'} px={12} position={'relative'} overflow={'hidden'} borderRadius={'lg'}>
            <Text fontSize={'5xl'} color={'plantshop.green'} lineHeight={'none'}>
              SPECIAL OFFER
              <br />
              30% OFF
            </Text>
            <Image src={home3.src} position={'absolute'} bottom={-20} right={-5} h={'312px'} objectFit={'cover'} />
          </Flex>
          <Flex
            flex={1}
            align={'center'}
            px={12}
            direction={'row-reverse'}
            bgColor={'plantshop.cream'}
            position={'relative'}
            overflow={'hidden'}
            borderRadius={'lg'}
          >
            <Text fontSize={'5xl'} color={'plantshop.green'} lineHeight={'none'}>
              SPECIAL OFFER
              <br />
              30% OFF
            </Text>
            <Image src={home1.src} position={'absolute'} bottom={-20} left={-5} h={'312px'} objectFit={'cover'} />
          </Flex>
        </Flex>
      </Flex>

      {/* Products */}
      <Box>
        <Flex justify={'space-between'} mb={'24'} align={'center'}>
          <Box fontWeight={'bold'} w={'45%'}>
            <Text color={'plantshop.green'}>OUR PRODUCT</Text>
            <Text fontSize={'3xl'}>There are variant types of plants that will make your room more comfortable</Text>
          </Box>
          <Flex justify={'space-between'} gap={'8'}>
            <Icon
              as={HiChevronLeft}
              rounded={'full'}
              bgColor={'plantshop.yellow'}
              boxSize={'12'}
              p={'3'}
              color={'white'}
              cursor={'pointer'}
              className="productSwiper-button-prev"
            />
            {/* <Button colorScheme="yellow" rounded={'full'}>
                </Button> */}
            {/* <Button colorScheme="yellow">
                </Button> */}
            <Icon
              as={HiChevronRight}
              rounded={'full'}
              bgColor={'plantshop.yellow'}
              boxSize={'12'}
              p={'3'}
              color={'white'}
              cursor={'pointer'}
              className="productSwiper-button-next"
            />
          </Flex>
        </Flex>
        <Box>
          <Swiper
            slidesPerView={4}
            // spaceBetween={'4px'}
            navigation={{
              prevEl: '.productSwiper-button-prev',
              nextEl: '.productSwiper-button-next',
            }}
            modules={[Navigation]}
          >
            {products.map((product, idx) => (
              <SwiperSlide key={idx}>
                <Flex
                  h={'500px'}
                  w={'340px'}
                  direction={'column'}
                  color={'white'}
                  bgColor={'plantshop.green'}
                  position={'relative'}
                  overflow={'hidden'}
                  borderTopLeftRadius={'50'}
                  borderTopRightRadius={'10'}
                  borderBottomRightRadius={'50'}
                  borderBottomLeftRadius={'10'}
                  px={'8'}
                  pb={'9'}
                  pt={'4'}
                  justify={'space-between'}
                >
                  {/* <Text>{idx}</Text> */}
                  <Flex flex={'1 1 50%'} justify={'center'} align={'center'}>
                    <Image src={product.img.src} objectFit={'cover'} h={'240px'} />
                  </Flex>
                  <Box>
                    <Text color={'plantshop.cream'} fontSize={'2xl'} fontWeight={'bold'}>
                      {product.name}
                    </Text>
                    <Text color={'plantshop.yellow'} fontSize={'2xl'}>
                      <Icon as={HiStar} />
                      <Icon as={HiStar} />
                      <Icon as={HiStar} />
                      <Icon as={HiStar} />
                      <Icon as={HiStar} />
                    </Text>
                    <Text color={'plantshop.cream'} fontSize={'lg'}>
                      ({product.stock} Stock)
                    </Text>
                    <Text fontSize={'2xl'}>{product.price}</Text>
                  </Box>
                  <Box
                    position={'absolute'}
                    bgColor={'plantshop.yellow'}
                    color={'plantshop.green'}
                    p={'8'}
                    borderTopLeftRadius={'30px'}
                    right={'0'}
                    bottom={'0'}
                  >
                    <Icon as={HiShoppingBag} boxSize={'10'} />
                  </Box>
                </Flex>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>

      {/* Testimoni */}
      <Flex gap={'24'}>
        <Box flex={1}>
          <Text color={'plantshop.green'} fontSize={'xl'} fontWeight={'bold'}>
            TESTIMONI
          </Text>
          <Text fontSize={'3xl'} fontWeight={'bold'}>
            What people said about us ?
          </Text>
          <Text fontSize={'xl'}>
            Most of them buy positive feedback for us which is none other than the best service we provide
          </Text>
        </Box>

        <Box w={'800px'}>
          <Swiper
            modules={[Pagination]}
            pagination={{
              enabled: true,
              clickable: true,
            }}
            spaceBetween={'20px'}
            className="testimoni-swiper"
          >
            {testimonis.map((testi, idx) => {
              const date = new Date(testi.date);
              return (
                <SwiperSlide key={idx}>
                  <Box
                    w={'800px'}
                    // h={'340px'}
                    color={'white'}
                    bgColor={'plantshop.green'}
                    py={'8'}
                    px={'6'}
                    borderTopLeftRadius={'50px'}
                    borderTopRightRadius={'xl'}
                    borderBottomRightRadius={'50px'}
                    borderBottomLeftRadius={'xl'}
                  >
                    <Text textAlign={'right'} fontSize={'lg'}>
                      {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}
                    </Text>
                    <Flex gap={'8'} align={'center'} my={'10'}>
                      <Box textAlign={'center'}>
                        <Avatar boxSize={'32'} mx={'auto'}></Avatar>
                        <Text fontSize={'xl'} color={'plantshop.cream'}>
                          {testi.name}
                        </Text>
                        <Text fontSize={'lg'}>{testi.city}</Text>
                      </Box>
                      <Text
                        fontSize={'lg'}
                        whiteSpace={'pre-wrap'}
                        position={'relative'}
                        _before={{
                          content: `'“'`,
                          display: 'block',
                          color: 'plantshop.cream',
                          fontSize: '8xl',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          transform: 'translate(-50%, -50%)',
                        }}
                      >
                        {testi.testimoni}
                      </Text>
                    </Flex>
                  </Box>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Box>
      </Flex>

      {/* Contact */}
      <Flex justify={'space-between'}>
        <Box flex={'1'}>
          <Text fontWeight={'bold'} color={'plantshop.green'} fontSize={'xl'}>
            CONTACT
          </Text>
          <Text fontWeight={'bold'} fontSize={'3xl'} whiteSpace={'pre-wrap'}>
            Do you have any problem?{'\n'}contact us immediately
          </Text>
          <Image src={customerService.src} w={'600px'} h={'400px'} />
        </Box>

        <Flex as="form" direction={'column'} gap={5} flex={'1'}>
          <Input placeholder="Full Name" bgColor={'rgba(30, 111, 92, 0.2)'} borderColor={'rgba(230, 221, 59, 0.7)'} />
          <Input
            placeholder="Email Address"
            bgColor={'rgba(30, 111, 92, 0.2)'}
            borderColor={'rgba(230, 221, 59, 0.7)'}
          />
          <Textarea
            placeholder="Your Message"
            flex={'1'}
            bgColor={'rgba(30, 111, 92, 0.2)'}
            borderColor={'rgba(230, 221, 59, 0.7)'}
          />
          <Button colorScheme="yellow">Send</Button>
        </Flex>
      </Flex>
    </>
  );
}
