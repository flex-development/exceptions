import type { MethodLowercase } from './method-lowercase.type'

/**
 * @file Type Definitions - MethodUppercase
 * @module exceptions/types/axios/MethodUppercase
 */

/**
 * HTTP methods (uppercase).
 */
export type MethodUppercase = Uppercase<MethodLowercase>
