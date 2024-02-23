import {expect, test} from 'vitest'
import {render, screen} from '@testing-library/react'
import Page from '../page'

test('UI', async () => {
  render(<Page />)

  // Test for Heading
  expect(
    screen.getByRole('heading', {
      level: 1,
      name: "I'm Kelvin Mijaya. I live in Indonesia.",
    }),
  ).toBeDefined()

  // Test for the Image component
  const imgElement = screen.getByAltText('kelvin mijaya portrait')
  await expect(imgElement.getAttribute('src')).toBe(
    '/_next/image?url=%2Fapp%2F(public)%2Fimages%2Fportrait.jpg&w=1920&q=75',
  )

  // Test Social Media url
  const linkedin = screen.getByTestId('linkedin-url')
  await expect(linkedin.getAttribute('href')).toBe(
    'https://www.linkedin.com/in/kelvinmijaya/',
  )
  const twitter = screen.getByTestId('twitter-url')
  await expect(twitter.getAttribute('href')).toBe(
    'https://twitter.com/kelvinmijaya',
  )
  const instagram = screen.getByTestId('instagram-url')
  await expect(instagram.getAttribute('href')).toBe(
    'https://www.instagram.com/kelvinmijaya',
  )
  const email = screen.getByTestId('email-url')
  await expect(email.getAttribute('href')).toBe('mailto:kelvinmijaya@gmail.com')

  // Test for the first paragraph
  const firstParagraphElement = screen.getByText(
    /Senior Software Engineer who loves building cool stuff with React or Javascript/i,
  )
  expect(firstParagraphElement).not.to.be.null

  // Test for the second paragraph
  const secondParagraphElement = screen.getByText(
    /I've been on this journey for 10 years/i,
  )
  expect(secondParagraphElement).not.to.be.null

  // Test for the WorkExperience component
  // Assuming WorkExperience component renders a text "Work Experience"
  const workExperienceElement = screen.getByText(/Work Experience/i)
  expect(workExperienceElement).not.to.be.null
})
