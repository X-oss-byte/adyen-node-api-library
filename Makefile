generator:=typescript-node
openapi-generator-cli:=docker run --user $(shell id -u):$(shell id -g) --rm -v ${PWD}:/local -w /local openapitools/openapi-generator-cli:v5.4.0
services:=checkout storedValue terminalManagement payments recurring

# Generate models (for each service)
models: $(services)

checkout: spec=CheckoutService-v69
storedValue: spec=StoredValueService-v46
terminalManagement: spec=TfmAPIService-v1
payments: spec=PaymentService-v68
recurring: spec=RecurringService-v68

$(services): build/spec 
	rm -rf src/typings/$@ build/model
	$(openapi-generator-cli) generate \
		-i build/spec/json/$(spec).json \
		-g $(generator) \
		-t templates/typescript \
		-o build \
		--global-property models,supportingFiles
	mv build/model src/typings/$@

# Checkout spec (and patch version)
build/spec:
	git clone https://github.com/Adyen/adyen-openapi.git build/spec
	sed -i 's/"openapi" : "3.[0-9].[0-9]"/"openapi" : "3.0.0"/' build/spec/json/*.json

# Extract templates (copy them for modifications)
templates:
	$(openapi-generator-cli) author template -g $(generator) -o build/templates/typescript

# Discard generated artifacts and changed models
clean:
	git checkout src/typings
	git clean -f -d src/typings

.PHONY: templates models $(services)