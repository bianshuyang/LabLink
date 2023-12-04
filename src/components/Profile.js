import React from 'react';
import Navbar from './Navbar.js';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import IconButton from '@mui/joy/IconButton';
import Textarea from '@mui/joy/Textarea';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardOverflow from '@mui/joy/CardOverflow';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

import { LabLinkContext } from '../LabLinkProvider';

export default function Profile() {

  const { netID } = React.useContext(LabLinkContext);
  const { name, setName } = React.useContext(LabLinkContext);
  const { role, setRole } = React.useContext(LabLinkContext);
  const { email, setEmail } = React.useContext(LabLinkContext);
  const { bio, setBio } = React.useContext(LabLinkContext);
  const { year, setYear } = React.useContext(LabLinkContext);
  const { major, setMajor } = React.useContext(LabLinkContext);
  const { courses, setCourses } = React.useContext(LabLinkContext);
  const [usersData, setusersData] = React.useState([]);
  const [updated, setupdated] = React.useState(true);

  const [isEditMode, setIsEditMode] = React.useState(false);

  // Toggle edit mode
  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        if (updated) {
          await fetchUsersAndUpdateState();

          const userInfo = await getUserNameByNetId(netID);
          if (userInfo && updated) {
            setIsEditMode(false);
            setName(userInfo.name || '');
            setRole(userInfo.role || '');
            setEmail(userInfo.email || '');
            setYear(userInfo.year || null);
            setMajor(userInfo.major || '');
            setCourses(userInfo.courses || '');
            setBio(userInfo.bio || '');
            setupdated(false);
          }
        }

      } catch (error) {
        // Handle errors...
        console.error("Error fetching and updating user data:", error.message);
      }
    };

    fetchData();

  });


  const getUserNameByNetId = (netId) => {
    const user = usersData.find(u => u.netId === netId);
    return user;
  };

  const fetchUsersAndUpdateState = async () => {
    try {
      const response = await fetch("/api/forum?dataType=users", {
        method: "GET"
      });
      const responseDataText = await response.text();

      // Attempt to parse as JSON, if fails, just use the text
      let responseData;
      try {
        responseData = JSON.parse(responseDataText);
      } catch (error) {
        console.error("Failed to parse response as JSON: ", responseDataText);
        responseData = responseDataText;
      }

      // Handle based on type
      if (typeof responseData === 'object' && response.ok) {
        setusersData(responseData);
      } else {
        console.error('Error or non-JSON response:', responseData);
      }
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  async function addUser({ name, role, email, year, major, courses, bio, netID }) {
    try {
      const response = await fetch("/api/forum?collection=users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          collectionName: 'users',
          name: name,
          role: role,
          email: email,
          year: year,
          major: major,
          courses: courses,
          bio: bio,
          netId: netID,
        }),
      });
      const statusCode = response.status;
    } catch (error) {
      //console.error('Error during registration:', error.message);
      console.log("Something is wrong...?")
      console.log(error);
    }

  }


  async function modifyUser({ name, role, email, year, major, courses, bio }) {
    try {
      //console.log(process.env);
      const response = await fetch("/api/forum?collection=users", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          collectionName: 'users',
          filter: { netId: netID },
          updateData: {
            name: name,
            role: role,
            email: email,
            year: year,
            major: major,
            courses: courses,
            bio: bio,
          }
        }),
      });
      const statusCode = response.status;
    } catch (error) {
      //console.error('Error during registration:', error.message);
      console.log("Something is wrong...?")
      console.log(error);
    }

  }


  const handleSave = async () => {
    try {
      // Check if the user data exists in the database
      const existingUser = getUserNameByNetId(netID);

      if (existingUser) {

        // User data exists, update it using modifyUser
        await modifyUser({
          name: name,
          role: role,
          email: email,
          year: year,
          major: major,
          courses: courses,
          bio: bio
        });
      } else {
        // User data doesn't exist, add a new user using addUser
        await addUser({
          name: name,
          role: role,
          email: email,
          year: year,
          major: major,
          courses: courses,
          bio: bio,
          netId: netID,
        });
      }

      alert("Profile updated successfully!");
    } catch (error) {
      // Handle errors
      console.error("Error saving profile:", error.message);
      alert("Failed to update profile. Please try again.");
    }
    setIsEditMode(false);
  };



  const handleCancel = () => {
    // Ignore changes and reset form fields to the values from LabLinkContext
    setName(prevName => prevName);
    setRole(prevRole => prevRole);
    setEmail(prevEmail => prevEmail);
    setBio(prevBio => prevBio);
    setYear(prevYear => prevYear);
    setMajor(prevMajor => prevMajor);
    setCourses(prevCourses => prevCourses);
  };


  return (
    <>
      <div className="site-mobile-menu">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close">
            <span className="icofont-close js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>

      <Navbar />

      <div className="untree_co-hero overlay">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-12">
              <div className="row justify-content-center ">
                <div className="col-lg-6 text-center ">
                  <h1 className="mb-4 heading text-white" data-aos="fade-up" data-aos-delay="100">Welcome {name ? name : netID}</h1>
                  <div className="mb-5 text-white desc mx-auto" data-aos="fade-up" data-aos-delay="200">
                    <p>Welcome to the LabLink Profile Page! Here, you have the power to personalize your scientific identity. Update your email, fine-tune your display name, and enhance your professional bio.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      {isEditMode ? (
        <Box
          sx={{
            flex: 1,
            width: '100%',
          }}
        >
          <Stack
            spacing={4}
            sx={{
              display: 'flex',
              maxWidth: '800px',
              mx: 'auto',
              px: {
                xs: 2,
                md: 6,
              },
              py: {
                xs: 2,
                md: 3,
              },
            }}
          >
            <Card>
              <Box sx={{ mb: 1 }}>
                <Typography level="title-md">Personal info</Typography>
                <Typography level="body-sm">
                  Customize how your profile information will apper to the networks.
                </Typography>
              </Box>
              <Divider />
              <Stack
                direction="row"
                spacing={3}
                sx={{ display: { xs: 'none', md: 'flex' }, my: 1 }}
              >
              </Stack>
              <Stack spacing={2} sx={{ flexGrow: 1 }}>
                <Stack spacing={1}>
                  <FormLabel>Name</FormLabel>



                  <FormControl
                    sx={{
                      display: {
                        sm: 'flex-column',
                        md: 'flex-row',
                      },
                      gap: 2,
                    }}
                  >
                    <Input size="sm" placeholder="Preferred Name" defaultValue={name} sx={{ flexGrow: 1 }} onChange={((e) => setName(e.target.value))} />
                  </FormControl>
                </Stack>
                <Stack direction="row" spacing={2}>
                  <FormControl>
                    <FormLabel>Role</FormLabel>
                    <Input size="sm" placeholder="Occupation" defaultValue={role} onChange={((e) => setRole(e.target.value))} />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Graduation Year</FormLabel>
                    <Input size="sm" placeholder="Year" defaultValue={year} onChange={((e) => setYear(e.target.value))} />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Major</FormLabel>
                    <Input size="sm" placeholder="Major" defaultValue={major} onChange={((e) => setMajor(e.target.value))} />
                  </FormControl>
                  <FormControl sx={{ flexGrow: 1 }}>
                    <FormLabel>Email</FormLabel>
                    <Input
                      size="sm"
                      type="email"
                      startDecorator={<EmailRoundedIcon />}
                      placeholder="Email"
                      defaultValue={email}
                      sx={{ flexGrow: 1 }}
                      onChange={((e) => setEmail(e.target.value))}
                    />
                  </FormControl>
                </Stack>
                <Stack spacing={1}>
                  <FormLabel>Previous Courses</FormLabel>
                  <FormControl
                    sx={{
                      display: {
                        sm: 'flex-column',
                        md: 'flex-row',
                      },
                      gap: 2,
                    }}
                  >
                    <Input size="sm" placeholder="eg., Data Structures and Algorithms, Research in Biology..." defaultValue={courses} sx={{ flexGrow: 1 }} onChange={((e) => setCourses(e.target.value))} />
                  </FormControl>
                </Stack>
              </Stack>

              <Stack
                direction="column"
                spacing={2}
                sx={{ display: { xs: 'flex', md: 'none' }, my: 1 }}
              >
                <Stack direction="row" spacing={2}>
                  <Stack spacing={1} sx={{ flexGrow: 1 }}>
                    <FormLabel>Name</FormLabel>
                    <FormControl
                      sx={{
                        display: {
                          sm: 'flex-column',
                          md: 'flex-row',
                        },
                        gap: 2,
                      }}
                    >
                      <Input size="sm" placeholder="Preferred Name" defaultValue={name} />
                    </FormControl>
                  </Stack>
                </Stack>
                <FormControl>
                  <FormLabel>Role</FormLabel>
                  <Input size="sm" placeholder="Occupation" defaultValue={role} />
                </FormControl>
                <FormControl>
                  <FormLabel>Major</FormLabel>
                  <Input size="sm" placeholder="Major" defaultValue={major} />
                </FormControl>
                <FormControl>
                  <FormLabel>Graduation Year</FormLabel>
                  <Input size="sm" placeholder="Year" defaultValue={year} />
                </FormControl>
                <FormControl sx={{ flexGrow: 1 }}>
                  <FormLabel>Email</FormLabel>
                  <Input
                    size="sm"
                    type="email"
                    startDecorator={<EmailRoundedIcon />}
                    placeholder="Email"
                    defaultValue={email}
                    sx={{ flexGrow: 1 }}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Previous Courses</FormLabel>
                  <Input size="sm" placeholder="eg., Data Structures and Algorithms, Research in Biology..." defaultValue={courses} />
                </FormControl>
              </Stack>
              <Stack spacing={1} sx={{ my: 1 }}>
                <Typography level="title-sm">Bio</Typography>
                <Textarea
                  size="sm"
                  minRows={4}
                  sx={{ mt: 1.5 }}
                  placeholder="Type your bio here..."
                  defaultValue={bio}
                  onChange={((e) => setBio(e.target.value))}
                />
                <FormHelperText sx={{ mt: 0.75, fontSize: 'xs' }}>
                  275 characters left
                </FormHelperText>
              </Stack>
              <CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
                <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
                  <Button size="sm" variant="outlined" color="neutral" onClick={() => {
                    toggleEditMode();
                    // Optionally reset form fields to initial state
                  }}>
                    Cancel
                  </Button>
                  <Button size="sm" variant="solid" onClick={handleSave}>
                    Save
                  </Button>
                </CardActions>
              </CardOverflow>
            </Card>
          </Stack>
        </Box >
      ) :
        (
          <>
            <Box
              sx={{
                flex: 1,
                width: '100%',
              }}
            >
              <Stack spacing={4}
                sx={{
                  display: 'flex',
                  maxWidth: '800px',
                  mx: 'auto',
                  px: {
                    xs: 4,
                    md: 18,
                  },
                  py: {
                    xs: 4,
                    md: 6,
                  },
                }}
              >
                <Card>
                  <Box sx={{ mb: 1 }} >
                    <Typography level="title-md">Personal info</Typography>
                    <Typography level="body-sm">
                      This is {name}'s personal information.
                    </Typography>
                  </Box>
                  <Divider />
                  <Stack spacing={1} >
                    <Typography variant="body-md">
                      Name: {name}
                    </Typography>
                  </Stack>
                  <Stack spacing={1}>
                    <Typography variant="body-md">
                      Role: {role}
                    </Typography>
                  </Stack>
                  <Stack spacing={1}>
                    <Typography variant="body-md">
                      Graduation Year: {year}
                    </Typography>
                  </Stack>
                  <Stack spacing={1}>
                    <Typography variant="body-md">
                      Major: {major}
                    </Typography>
                  </Stack>
                  <Stack spacing={1}>
                    <Typography variant="body-md">
                      Email: {email}
                    </Typography>
                  </Stack>
                  <Stack spacing={1}>
                    <Typography variant="body-md">
                      Previous Courses: {courses}
                    </Typography>
                  </Stack>
                  <Stack spacing={1}>
                    <Typography level="title-sm">Bio</Typography>
                    <Typography variant="body-md">
                      {bio}
                    </Typography>
                  </Stack>
                </Card>
                <Button size="sm" variant="solid" onClick={() => toggleEditMode()}>
                  Edit Profile
                </Button>
              </Stack>
            </Box>
          </>
        )
      }
    </>
  );
}
