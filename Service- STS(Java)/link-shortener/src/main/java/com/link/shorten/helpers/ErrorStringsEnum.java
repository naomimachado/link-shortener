package com.link.shorten.helpers;

/**
 * The Enum ErrorStringsEnum.
 */
public enum ErrorStringsEnum {
	
	/** The invalid. */
	INVALID("Invalid Request! Please check URL.");
	
	/** The error message. */
	private String errorMessage;

	/**
	 * Gets the error message.
	 *
	 * @return the error message
	 */
	public String getErrorMessage() {
		return errorMessage;
	}
	
	/**
	 * Instantiates a new error strings enum.
	 *
	 * @param errorMessage the error message
	 */
	ErrorStringsEnum(String errorMessage) {
		this.errorMessage = errorMessage;
	}
	
}
