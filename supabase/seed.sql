-- Run this AFTER schema.sql in the Supabase SQL Editor to seed your current data.

-- Clear existing rows (optional; remove if you want to keep existing data)
-- truncate public.projects cascade;
-- truncate public.work_experience cascade;

-- Projects (image = path in portfolio bucket, e.g. dcConverter.png; app resolves to Supabase Storage or /assets/ when unset)
insert into public.projects (id, title, image, link, sort_order) values
  ('project1', 'Battery Eliminator Circuit', 'dcConverter.png', 'https://acrobat.adobe.com/id/urn:aaid:sc:US:b186107f-ccf0-4e71-9196-d5e1e288893c', 1),
  ('project2', 'Discord Chatbot', 'noagpt.png', 'https://noagpt-website.vercel.app/', 2),
  ('project3', 'Fourier Series Visualizer', 'fourier.png', 'https://fourier-app.vercel.app/', 3),
  ('project4', '[Beta] Homeless Simulator', 'homeless_addon.png', 'https://www.roblox.com/games/76631316909858/Homeless-Simulator', 4),
  ('project5', 'TungTung\nTungSahur\nObby', 'tungtungobby_addon.png', 'https://www.roblox.com/games/80929191589661/TungTungTungSahur-Obby', 5),
  ('project6', '[Collect 67] Simulator', '67sim_addon.png', 'https://www.roblox.com/games/121224456961897/COLLECT-67-Simulator-Game', 6)
on conflict (id) do update set
  title = excluded.title,
  image = excluded.image,
  link = excluded.link,
  sort_order = excluded.sort_order;

-- Work experience (logo = path in portfolio bucket)
insert into public.work_experience (id, org, logo, position, description, details, sort_order) values
  (
    'uavsberkeley',
    'UAVs@Berkeley',
    'uavs.png',
    'EE Subteam Member',
    'I create PCB schematics in Altium Designer for unmanned aerial vehicle systems such as drones and VTOLs!',
    'At UAVs@Berkeley, I work on power converter boards, sensor integration, and PCB layout for unmanned aerial vehicle avionics systems. I collaborate with subteams and use Altium Designer to create production-ready PCBs that power cutting-edge drone technology.

My responsibilities include designing circuit schematics, performing component selection, and ensuring designs meet industry standards for reliability and performance. I work closely with mechanical and software teams to integrate electronic systems seamlessly into our aircraft designs.',
    1
  ),
  (
    'boeing',
    'Boeing',
    'boeing_logo.png',
    'Electronics Engineer Intern',
    'I interned for EPSTE (electronic products special test equipment) department. During my time at Boeing, I developed diagrams of several thermocouples and wire diagrams of one testing rack system. I managed the EPSTE website for new hires as well as documented parts within the flight test equipment labs. My experience at the company was a turning point in my high school career and continues to serve as my motivation to pursue a career in the aerospace industry.',
    'During my internship at Boeing''s EPSTE (Electronic Products Special Test Equipment) department, I gained hands-on experience in aerospace electronics and test equipment systems. I created detailed wire diagrams and thermocouple setups for testing rack systems used in flight test equipment validation.

My work included developing comprehensive technical documentation, managing the EPSTE website for new hires, and cataloging parts within the flight test equipment laboratories. This experience provided me with invaluable insight into the aerospace industry''s rigorous testing standards and quality assurance processes.

This internship was a pivotal moment in my career journey, solidifying my passion for aerospace engineering and electronics. It continues to drive my motivation to pursue excellence in the aerospace industry.',
    2
  )
on conflict (id) do update set
  org = excluded.org,
  logo = excluded.logo,
  position = excluded.position,
  description = excluded.description,
  details = excluded.details,
  sort_order = excluded.sort_order;

-- Education (logo = path in portfolio bucket)
insert into public.education (id, name, logo, link, sort_order) values
  ('berkeley', 'UC Berkeley', 'berkeley_logo.png', 'https://eecs.berkeley.edu/', 1)
on conflict (id) do update set
  name = excluded.name,
  logo = excluded.logo,
  link = excluded.link,
  sort_order = excluded.sort_order;
