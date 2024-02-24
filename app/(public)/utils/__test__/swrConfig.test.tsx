import {describe, it, expect} from 'vitest'
import SwrConfig from '../swrConfig'

describe('SwrConfig', () => {
  it('should have the correct initialSize', () => {
    expect(SwrConfig.initialSize).toBe(1)
  })

  it('should have revalidateAll set to true', () => {
    expect(SwrConfig.revalidateAll).toBe(true)
  })

  it('should have revalidateFirstPage set to false', () => {
    expect(SwrConfig.revalidateFirstPage).toBe(false)
  })

  it('should have revalidateIfStale set to true', () => {
    expect(SwrConfig.revalidateIfStale).toBe(true)
  })

  it('should have revalidateOnReconnect set to true', () => {
    expect(SwrConfig.revalidateOnReconnect).toBe(true)
  })

  it('should have persistSize set to false', () => {
    expect(SwrConfig.persistSize).toBe(false)
  })

  it('should have parallel set to false', () => {
    expect(SwrConfig.parallel).toBe(false)
  })
})
